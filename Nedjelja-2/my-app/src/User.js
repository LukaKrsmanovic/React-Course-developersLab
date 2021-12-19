export function User(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.userInfo.avatar_url} alt="user-image" />
      </div>
      <div className="content">
        <div className="header">{props.userInfo.name}</div>
        <div className="meta">
          <a>Username: {props.userInfo.login}</a>
        </div>
        <div className="description">{props.userInfo.bio}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Joined in {getDate(props.userInfo.created_at)}
        </span>
        <span>
          <i className="user icon"></i>
          {props.userInfo.followers} Followers
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
