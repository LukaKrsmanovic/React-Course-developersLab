import './App.css';
import { User } from './User';

function App() {
  return (
    <div class="ui link cards">
      <User userInfo={{name: "Luka", job: "Developer"}}></User>
      <User userInfo={{name: "Rade", job: "Electronics"}}></User>
    </div>
  );
}

export default App;
