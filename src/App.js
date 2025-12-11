import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.shecodes.io/graduates/92144-tshilidzi-mulibana"
              target="_blank"
            >
              {" "}
              Tshilidzi Mulibana
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/Chichiprecious1/tshilidzis-dictionary"
              target="_blank"
            >
              {" "}
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://tshilidzis-dictionary.netlify.app/"
              target="_blank"
            >
              {" "}
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
