import logo from "./logo.svg";
import Banner from "./components/Banner";
import GameAccordian from "./components/GameAccordian";
import AddGame from "./components/AddGame";
import { useState, useEffect } from "react";
import "./App.css";
import gameList from "./games";

function App() {
  const [isAdd, setIsAdd] = useState(false);

  const [games, setGames] = useState(
    localStorage.getItem("gamesList")
      ? JSON.parse(localStorage.getItem("gamesList"))
      : gameList
  );

  const toggleBanner = (bannerData) => {
    setIsAdd(bannerData);
  };

  useEffect(() => {
    setGames(JSON.parse(localStorage.getItem("gamesList")));
  }, [localStorage.getItem("gamesList")]);

  return (
    <div className="App">
      <div className="container">
        <Banner sendToApp={toggleBanner} />

        {isAdd ? (
          <AddGame />
        ) : (
          <div>
            {games.map((game, index) => {
              return (
                <GameAccordian
                  key={game.id}
                  style={
                    index === 0
                      ? "Accordian"
                      : index === games.length - 1
                      ? "AccordianLast"
                      : "AccordianMid"
                  }
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
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
