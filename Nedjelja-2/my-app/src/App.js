import React from "react";
import "./App.css";
import { User } from "./User";

const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=741a5a16523a2ebd077f3f2a6cba06a2";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { name: "Name", username: "Username: " },
      allMovies: [],
      loading: true,
      currentPage: 1,
    };
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        this.setState({ allMovies: data.results, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMovieInfo() {
    let movies = this.state.allMovies;
    return movies.map((movie) => {
      return <User movieInfo={movie} key={movie.id}></User>;
    });
  }

  loadPage = (e) => {
    let currentPage = this.state.currentPage + 1;
    if (e.currentTarget.id === "back-button") {
      currentPage = this.state.currentPage - 1;
    }

    currentPage = currentPage < 1 ? (currentPage = 1) : currentPage;
    currentPage = currentPage > 500 ? (currentPage = 500) : currentPage;

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

  render() {
    console.log(this.state.currentPage);
    if (this.state.loading === true) {
      return <div class="ui active centered inline loader"></div>;
    }
    return (
      <div id="all">
        <h1>Popular Movies Page: {this.state.currentPage}</h1>
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
        </div>
        <div className="ui link cards">{this.getMovieInfo()}</div>
      </div>
    );
  }
}

export default App;
