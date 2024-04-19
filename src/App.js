import logo from "./logo.svg";
import Banner from "./components/Banner";
import GameAccordian from "./components/GameAccordian";
import UnopenAccordian from "./components/UnopenAccordian";
import AddGame from "./components/AddGame";
import SortGames from "./components/SortGames";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const checkGameList = () => {
    return localStorage.getItem("gamesList")
      ? JSON.parse(localStorage.getItem("gamesList"))
      : [];
  };

  const [isAdd, setIsAdd] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [listChanged, setListChanged] = useState();
  const [games, setGames] = useState(checkGameList());

  const toggleBanner = (bannerData) => {
    setIsAdd(bannerData);
  };

  const listChange = (removedData) => {
    setListChanged(removedData);
  };

  const sortList = (sortGamesData) => {
    setSortBy(sortGamesData);
  };

  useEffect(
    () => {
      setGames(checkGameList());
    },
    [localStorage.getItem("gamesList")],
    listChanged,
    sortBy
  );

  return (
    <div className="App">
      <h1 style={{ color: "#e6ffff" }}>Welcome to the Backlogs!</h1>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <SortGames sendToApp={sortList} />
          </div>

          <div className="col-10">
            <Banner sendToApp={toggleBanner} />
            {isAdd ? (
              <AddGame />
            ) : (
              <div>
                {games.length < 1 && (
                  <UnopenAccordian
                    style={"Accordian"}
                    name={
                      "You have no games in your backlogs yet! Click 'Add Game' to get started!"
                    }
                  />
                )}
                {games.map((game, index) => {
                  return (
                    <GameAccordian
                      key={game.id}
                      id={game.id}
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
                      gameRemoved={listChange}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
