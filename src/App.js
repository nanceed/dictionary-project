import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Nancy's Dictionary
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="App-footer">
          <small>This project was coded by {""}
            <a href="https://github.com/nanceed" target="_blank" rel="noreferrer">Nancy Duong </a>
            and is open-sourced on
            <a href="https://github.com/nanceed/dictionary-project" target="_blank" rel="noreferrer"> GitHub </a>
          </small>
        </footer>
      </div>
      </div>
  );
}

