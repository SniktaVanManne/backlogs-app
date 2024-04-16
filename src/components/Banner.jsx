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

  const [isAdd, setIsAdd] = useState(false);

  const soma = {
    id: 0,
    name: "Soma",
    imgURL:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/282140/header.jpg?t=1685698900",
    description: "Catherine? Catherine ... don't leave me alone ...",
    criticScore: 83,
    steamScore: 95,
    hoursToBeat: 9,
    tags: ["Horror", "Thriller", "First Person", "Story-Rich", "Psychological"],
  };

  useEffect(() => {
    props.sendToApp(isAdd);
  }, [isAdd]);

  return (
    <div className="Banner">
      <h1>Welcome to the Backlogs!</h1>
      <div className="container">
        <ul className="nav nav-pills">
          <li
            className="nav-item"
            onClick={() => {
              setIsAdd(false);
            }}
          >
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              What to Play Next
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setIsAdd(true);
            }}
          >
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              Add a Game
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              let tempGameList = [];

              tempGameList.push(soma);

              let stringList = JSON.stringify(tempGameList);

              localStorage.setItem("gamesList", stringList);

              return;
            }}
          >
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              Add Soma
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
