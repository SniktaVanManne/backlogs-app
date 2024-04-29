import logo from "./logo.svg";
import Banner from "./components/Banner";
import GameAccordian from "./components/GameAccordian";
import UnopenAccordian from "./components/UnopenAccordian";
import AddGame from "./components/AddGame";
import SortGames from "./components/SortGames";
import SearchGame from "./components/SearchGame";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const checkGameList = () => {
    return localStorage.getItem("gamesList")
      ? JSON.parse(localStorage.getItem("gamesList"))
      : [];
  };

  const [bannerSection, setBannerSection] = useState("add");
  const [sortBy, setSortBy] = useState("default");
  const [listChanged, setListChanged] = useState();
  const [listUpdated, setListUpdated] = useState();
  const [games, setGames] = useState(checkGameList());

  const toggleBanner = (bannerData) => {
    setBannerSection(bannerData);
  };

  const listChange = (removedData) => {
    setListChanged(removedData);
  };

  const hoursUpdate = (hoursData) => {
    setListUpdated(hoursData);
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
    sortBy,
    listUpdated
  );

  return (
    <div className="App">
      <h1 style={{ color: "#e6ffff" }}>Welcome to the Backlogs!</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SortGames sendToApp={sortList} />
          </div>

          <div className="col-7">
            <Banner sendToApp={toggleBanner} />
            {bannerSection === "add" ? (
              <AddGame />
            ) : bannerSection === "view" ? (
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
                      position={index}
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
                      weightedScore={game.weightedScore}
                      tags={game.tags}
                      gameRemoved={listChange}
                      onUpdateHours={hoursUpdate}
                    />
                  );
                })}
              </div>
            ) : bannerSection === "search" ? (
              <SearchGame />
            ) : (
              <div />
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
