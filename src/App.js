import './App.css';
import "../src/Styles/todo.css"
import Auth0 from './Components/Auth0';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/> 
      <Auth0/>
    </div>
  );
}

export default App;
