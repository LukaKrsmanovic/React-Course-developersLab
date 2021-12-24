import React from "react";
import "./App.css";
import { User } from "./User";

const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=741a5a16523a2ebd077f3f2a6cba06a2";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      searchVal: "",
      loading: true,
      currentPage: 1,
      totalPages: 1,
      isSorted: false,
    };
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          allMovies: data.results,
          totalPages: data.total_pages,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMovieInfo() {
    let allMovies = this.state.allMovies;
    let searchVal = this.state.searchVal;

    let movies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchVal.toLowerCase())
    );

    return movies.map((movie) => {
      return <User movieInfo={movie} key={movie.id}></User>;
    });
  }

  loadPage = (e) => {
    let currentPage = this.state.currentPage + 1;
    if (e.currentTarget.id === "back-button") {
      currentPage = this.state.currentPage - 1;
    }

    let totalPages = this.state.totalPages;
    currentPage = currentPage < 1 ? (currentPage = 1) : currentPage;
    currentPage =
      currentPage > totalPages ? (currentPage = totalPages) : currentPage;

    if (currentPage !== this.state.currentPage) {
      fetch(BASE_URL + "&page=" + currentPage)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({ currentPage, allMovies: data.results });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  changeResults = (e) => {
    let searchVal = e.target.value;
    this.setState({ searchVal });
  };

  sortByRating = () => {
    let allMovies = this.state.allMovies;
    let positions = [];
    let ratings = [];

    allMovies.forEach((movie) => {
      ratings.push(movie.vote_average);
    });

    ratings.sort();

    let isSorted = !this.state.isSorted;
    if (!isSorted) {
      ratings.reverse();
    }

    let sortedMovies = [];
    let i = 0,
      j = 0;
    while (true) {
      if (!positions.includes(i) && allMovies[i].vote_average === ratings[j]) {
        sortedMovies.push(allMovies[i]);
        positions.push(i);
        i = -1;
        j++;
      }

      if (positions.length === allMovies.length) {
        break;
      }

      i++;
    }

    this.setState({ allMovies: sortedMovies, isSorted });
  };

  render() {
    if (this.state.loading === true) {
      return <div className="ui active centered inline loader"></div>;
    }
    return (
      <div id="all">
        <h1>
          Popular Movies Page: {this.state.currentPage} /{" "}
          {this.state.totalPages}
        </h1>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            onChange={this.changeResults}
          />
          <i className="search icon"></i>
        </div>
        <div className="buttons-container">
          <div
            className="ui animated fade button"
            tabIndex="0"
            id="back-button"
            onClick={this.loadPage}
          >
            <div className="visible content">Back</div>
            <div className="hidden content">
              <i className="left arrow icon"></i>
            </div>
          </div>
          <div
            className="ui animated fade button"
            tabIndex="1"
            id="next-button"
            onClick={this.loadPage}
          >
            <div className="visible content">Next</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </div>
          <button
            className="ui right labeled icon button"
            onClick={this.sortByRating}
          >
            {this.state.isSorted ? (
              <i className="up arrow icon"></i>
            ) : (
              <i className="down arrow icon"></i>
            )}
            Sort by rating
          </button>
        </div>
        <div className="ui link cards">{this.getMovieInfo()}</div>
      </div>
    );
  }
}

export default App;
