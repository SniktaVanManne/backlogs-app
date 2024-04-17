import React from "react";

const AddGame = () => {
  const numScores = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 100,
  ];

  const validatorHelp = {
    criticScore: { name: "Open Critic Score", elementId: "metaCriticScore" },
    description: { name: "Description", elementId: "gameDescription" },
    hoursToBeat: { name: "Length in Hours", elementId: "howLongToBeat" },
    imgURL: { name: "Game Image URL", elementId: "gameImg" },
    name: { name: "Name of Game", elementId: "gameName" },
    steamScore: { name: "Steam Score", elementId: "steamScore" },
  };

  let newGame = {
    criticScore: "",
    description: "",
    hoursToBeat: "",
    id: "",
    imgURL: "",
    name: "",
    steamScore: "",
    tags: [],
    weightedScore: "",
  };

  return (
    <div className="container">
      <form className="row g-3" id="addGameForm">
        <div className="col-md-6">
          <label htmlFor="gameName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="gameName"
            placeholder="Name of Game"
            onChange={(event) => {
              event.target.style.backgroundColor = "white";
              newGame.name = event.target.value.trim();
            }}
          />
        </div>
        {/* TODO: Copy/Paste does not trigger OnChange */}
        <div className="col-md-6">
          <label htmlFor="gameImg" className="form-label">
            Game Cover
          </label>
          <input
            type="text"
            className="form-control"
            id="gameImg"
            placeholder="Copy and Paste a URL of the Game Cover"
            onChange={(event) => {
              event.target.style.backgroundColor = "white";
              newGame.imgURL = event.target.value.trim();
            }}
          />
        </div>
        <div className="col-12">
          <label htmlFor="gameDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="gameDescription"
            placeholder="Copy/Paste Game Description"
            onChange={(event) => {
              event.target.style.backgroundColor = "white";
              newGame.description = event.target.value.trim();
            }}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="steamScore" className="form-label">
            Please Enter Steam Score
          </label>
          <select
            id="steamScore"
            className="form-select"
            onChange={(event) => {
              event.target.style.backgroundColor = "white";
              newGame.steamScore = Number(event.target.value);
            }}
          >
            <option defaultValue={"Choose Steam Score..."}>
              Choose Steam Score...
            </option>
            {numScores.map((num) => {
              return (
                <option key={100 - num} value={100 - num}>
                  {100 - num}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="metaCriticScore" className="form-label">
            Please Enter Metacritic Score
          </label>
          <select
            id="metaCriticScore"
            className="form-select"
            onChange={(event) => {
              event.target.style.backgroundColor = "white";
              newGame.criticScore = Number(event.target.value);
            }}
          >
            <option defaultValue={"Choose Metacritic Score..."}>
              Choose Metacritic Score...
            </option>
            {numScores.map((num) => {
              return (
                <option key={100 - num} value={100 - num}>
                  {100 - num}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-3">
          <label htmlFor="howLongToBeat" className="form-label">
            Please Enter Length of Game
          </label>
          <select
            id="howLongToBeat"
            className="form-select"
            onChange={(event) => {
              event.target.style.backgroundColor = "white";
              newGame.hoursToBeat = Number(event.target.value);
            }}
          >
            <option defaultValue={"How Long to Beat In Hours..."}>
              How Long to Beat In Hours...
            </option>
            {numScores.map((num) => {
              return num === 100 ? (
                <option key={num + 1} value={num + 1}>
                  {num + 1}+
                </option>
              ) : (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("addGameForm").reset();

              let tempGameList = JSON.parse(localStorage.getItem("gamesList"));

              newGame.id =
                newGame.name.replace(/\s/g, "") +
                tempGameList.length +
                Math.floor(10 * Math.random());

              // TODO: Add ability to Choose Tags
              newGame.tags = ["Game", "Good", "Fun"];

              let flagged = false;

              for (const [key, inputValue] of Object.entries(newGame)) {
                if (flagged) {
                  return;
                } else {
                  if (!inputValue) {
                    alert(validatorHelp[key].name + " Cannot Be Blank");
                    document.getElementById(
                      validatorHelp[key].elementId
                    ).style.backgroundColor = "pink";
                    flagged = true;
                  }
                }
              }

              tempGameList.push(newGame);

              localStorage.setItem("gamesList", JSON.stringify(tempGameList));
            }}
          >
            Submit Game
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGame;
