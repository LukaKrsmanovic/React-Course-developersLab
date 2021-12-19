export function User(props) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card">
      <div className="image">
        <img src={IMG_URL + props.movieInfo.poster_path} alt="user-image" />
      </div>
      <div className="content">
        <div className="header">{props.movieInfo.title}</div>
        <div className="meta">
          <a>Language: {props.movieInfo.original_language}</a>
        </div>
        <div className="description">
          {props.movieInfo.overview.slice(0, 150)} ...
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Release date: {getDate(props.movieInfo.release_date)}
        </span>
        <span>
          <i className="heart outline icon"></i>
          {props.movieInfo.vote_average * 10}%
        </span>
      </div>
    </div>
  );
}

function getDate(date) {
  let result = date;
  try {
    result = result.slice(0, 4);
  } catch {}

  return result;
}
