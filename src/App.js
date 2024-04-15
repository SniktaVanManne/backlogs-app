import logo from "./logo.svg";
import Banner from "./components/Banner";
import GameAccordian from "./components/GameAccordian";
import AddGame from "./components/AddGame";
import { useState } from "react";
import "./App.css";
import gameList from "./games";

const games = gameList;

function App() {
  const [isAdd, setIsAdd] = useState(false);

  const toggleBanner = (bannerData) => {
    setIsAdd(bannerData);
  };

  return (
    <div className="App">
      <Banner sendToApp={toggleBanner} />
      {isAdd ? (
        <AddGame />
      ) : (
        <div>
          {games.map((game) => {
            return (
              <GameAccordian
                key={game.id}
                name={game.name}
                imgURL={game.imgURL}
                description={game.description}
                steamScore={game.steamScore}
                criticScore={game.criticScore}
                hoursToBeat={game.hoursToBeat}
                tags={game.tags}
              />
            );
          })}
        </div>
      )}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
