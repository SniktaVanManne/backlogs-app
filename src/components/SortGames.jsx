import React from "react";

const SortGames = (props) => {
  let sortType;

  const sortGames = (desiredHours) => {
    if (!localStorage.getItem("gamesList")) {
      return;
    }

    let tempGamesList = JSON.parse(localStorage.getItem("gamesList"));

    tempGamesList.sort((a, b) => {
      return (
        b.weightedScore / Math.pow(b.hoursToBeat - desiredHours, 2) -
        a.weightedScore / Math.pow(a.hoursToBeat - desiredHours, 2)
      );
    });

    localStorage.setItem("gamesList", JSON.stringify(tempGamesList));
    props.sendToApp(desiredHours);
  };

  const sortGamesAlpha = () => {
    sortType = "alpha";
    if (!localStorage.getItem("gamesList")) {
      return;
    }

    let tempGamesList = JSON.parse(localStorage.getItem("gamesList"));

    tempGamesList.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    localStorage.setItem("gamesList", JSON.stringify(tempGamesList));
    props.sendToApp(sortType);
  };

  return (
    <div>
      <h2>Sort Games</h2>
      <button
        onClick={() => {
          sortGames(0);
        }}
      >
        Sort
      </button>
      <button
        onClick={() => {
          sortGames(5.5);
        }}
      >
        Sort 5 Hours
      </button>
      <button
        onClick={() => {
          sortGames(20.5);
        }}
      >
        Sort 20 Hours
      </button>
      <button
        onClick={() => {
          sortGames(40.5);
        }}
      >
        Sort 40 Hours
      </button>
      <button
        onClick={() => {
          sortGames(80.5);
        }}
      >
        Sort 80+ Hours
      </button>
      <button value={"name"} onClick={sortGamesAlpha}>
        Sort Alphabetically
      </button>
    </div>
  );
};

export default SortGames;
