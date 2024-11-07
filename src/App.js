import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="App-footer">
          <small>This project was coded by {""}
            <a href="https://github.com/nanceed" target="_blank" rel="noreferrer">Nancy Duong </a>
            and is open-sourced on
            <a href="https://github.com/nanceed/dictionary-project" target="_blank" rel="noreferrer"> GitHub </a>
            and hosted on
            <a href="https://dictionary-project-nancyd.netlify.app/" target="_blank" rel="noreferrer"> Netlify </a>
          </small>
        </footer>
      </div>
      </div>
  );
}

