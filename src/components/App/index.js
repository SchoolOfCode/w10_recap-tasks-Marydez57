import Articles from "../Articles/articles";
import LoginButton from "../UserLogin/userLoginButton";
import LogoutButton from "../UserLogout/userLogoutButton";
import "./App.css";

function App() {
  return (
    <main className="App">
    <Articles />
    <LoginButton />
    <LogoutButton />
    </main>
  );
}

export default App;
