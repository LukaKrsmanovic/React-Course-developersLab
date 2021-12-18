export function User(props) {
  return (
    <div class="card">
      <div class="image">
        <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt="user-image" />
      </div>
      <div class="content">
        <div class="header">{props.userInfo.name}</div>
        <div class="meta">
          <a>{props.userInfo.job}</a>
        </div>
        <div class="description">
          Matthew is an interior designer living in New York.
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
          Joined in 2013
        </span>
        <span>
          <i class="user icon"></i>
          75 Friends
        </span>
      </div>
    </div>
  );
}
