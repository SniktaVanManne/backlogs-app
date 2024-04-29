import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = (props) => {
  const tabStyle = {
    backgroundColor: "#282c34",
    color: "#ccffff",
    borderColor: "#ccffff",
    width: "170px",
    marginRight: "3px",
    borderRadius: "15px 15px 0px 0px",
    borderWidth: "1px",
    borderStyle: "solid",
  };

  const [isAdd, setIsAdd] = useState("view");

  useEffect(() => {
    props.sendToApp(isAdd);
  }, [isAdd]);

  return (
    <div className="Banner">
      <div className="container">
        <ul className="nav nav-pills">
          <li
            className="nav-item"
            onClick={() => {
              setIsAdd("view");
            }}
          >
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              What to Play Next
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setIsAdd("search");
            }}
          >
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              Search Games
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setIsAdd("add");
            }}
          >
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              Add a Game
            </a>
          </li>

          {/* <li
            className="nav-item"
            onClick={() => {
              let tempGameList = localStorage.getItem("gamesList")
                ? JSON.parse(localStorage.getItem("gamesList"))
                : [];

              let soma = {
                id:
                  "Soma" + tempGameList.length + Math.floor(10 * Math.random()),
                name:
                  "Soma" + tempGameList.length + Math.floor(10 * Math.random()),
                imgURL:
                  "https://cdn.cloudflare.steamstatic.com/steam/apps/282140/header.jpg?t=1685698900",
                description:
                  "Catherine? Catherine ... don't leave me alone ...",
                criticScore: Math.floor(100 * Math.random() + 1),
                steamScore: Math.floor(100 * Math.random() + 1),
                hoursToBeat: Math.floor(100 * Math.random() + 1),
                weightedScore: null,
                tags: [
                  "Horror",
                  "Thriller",
                  "First Person",
                  "Story-Rich",
                  "Psychological",
                ],
              };

              soma.weightedScore = soma.steamScore * soma.criticScore;

              tempGameList.push(soma);

              let stringList = JSON.stringify(tempGameList);

              localStorage.setItem("gamesList", stringList);

              return;
            }}
          >
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              Add Soma
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
