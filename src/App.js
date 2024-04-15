import logo from "./logo.svg";
import Banner from "./components/Banner";
import GameAccordian from "./components/GameAccordian";
import AddGame from "./components/AddGame";
import { useState } from "react";
import "./App.css";

function App() {
  const [isAdd, setIsAdd] = useState(false);

  const toggleBanner = (bannerData) => {
    setIsAdd(bannerData);
  };

  return (
    <div className="App">
      <Banner sendToApp={toggleBanner} />
      {isAdd ? <AddGame /> : <GameAccordian />}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
