import LoginButton from "../UserLogin/userLoginButton";
import Wikipigeon from "../WikiPigeonPage/wikipigeon";
import css from './App.module.css'

function App() {
  return (
    <main className={css.app}>
  <Wikipigeon />
  <LoginButton />
  
    </main>
  );
}

export default App;
