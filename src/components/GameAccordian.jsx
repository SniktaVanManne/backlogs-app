import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./GameAccordian.css";
import deleteIcon from "../imgs/delete.png";

const GameAccordian = (props) => {
  const [lengthInHours, setLengthInHours] = useState();

  const removeGame = () => {
    if (window.confirm(`This will remove ${props.name} from your backlog`)) {
      let tempGamesList = JSON.parse(localStorage.getItem("gamesList"));

      tempGamesList = tempGamesList.filter((game) => {
        return game.id !== props.id;
      });

      localStorage.setItem("gamesList", JSON.stringify(tempGamesList));

      props.gameRemoved(tempGamesList.length);
    } else {
      return;
    }
  };

  const updateHours = (id, length) => {
    props.onUpdateHours([id, length]);
  };

  return (
    <div className="container">
      <Accordion className={props.style}>
        <Accordion.Item eventKey={props.id}>
          <Accordion.Header>{props.name}</Accordion.Header>
          <Accordion.Body>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    style={{
                      borderRadius: "5%",
                      marginTop: "50px",
                      width: "230px",
                    }}
                    src={props.imgURL}
                  />
                </div>
                <div className="col">
                  <h1>{props.name}</h1>
                  <p>{props.description}</p>
                </div>
                <div className="col">
                  <h2 style={{ marginTop: "50px" }}>Steam</h2>
                  <p>{Math.round(props.steamScore)}%</p>
                  {Math.round(props.steamScore) > 94 ? (
                    <p>Overwhelming Positive</p>
                  ) : Math.round(props.steamScore) > 80 ? (
                    <p>Very Positive</p>
                  ) : Math.round(props.steamScore) > 70 ? (
                    <p>Mostly Positive</p>
                  ) : Math.round(props.steamScore) > 40 ? (
                    <p>Mixed</p>
                  ) : Math.round(props.steamScore) > 20 ? (
                    <p>Mostly Negative</p>
                  ) : (
                    <p>Very Negative</p>
                  )}
                  <h2>MetaCritic</h2>
                  <p>{props.criticScore}</p>
                  <hr />
                  <h3>Hours to Beat</h3>
                  {props.hoursToBeat > 100 ? (
                    <p>{props.hoursToBeat}+ Hours</p>
                  ) : (
                    <p>{props.hoursToBeat} Hours</p>
                  )}
                  <input
                    type="number"
                    id="hoursToBeat"
                    onBlur={(event) => {
                      setLengthInHours(event.target.value);
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      let tempGameList = JSON.parse(
                        localStorage.getItem("gamesList")
                      );

                      let tempGame;

                      tempGame = tempGameList.filter((game) => {
                        return game.id === props.id;
                      });

                      tempGame.hoursToBeat =
                        document.getElementById("hoursToBeat").value;

                      tempGameList.map((game) => {
                        if (game.id === props.id) {
                          game.criticScore = props.criticScore;
                          game.description = props.description;
                          game.hoursToBeat = lengthInHours;
                          game.id = props.id;
                          game.imgURL = props.imgURL;
                          game.name = props.name;
                          game.steamScore = props.steamScore;
                          game.tags = props.tags;
                          game.weightedScore = props.weightedScore;
                        } else {
                          return;
                        }
                      });

                      localStorage.setItem(
                        "gamesList",
                        JSON.stringify(tempGameList)
                      );

                      updateHours(props.id, props.hoursToBeat);
                    }}
                  >
                    Enter Hours to Beat
                  </button>
                  <hr />
                  <h4>Tags</h4>

                  {props.tags.map((tag) => {
                    return <div key={tag.id}>{tag.name}</div>;
                  })}
                </div>
              </div>
              <div className="row">
                <div
                  className="col-1 RemoveButton"
                  style={{ width: "30px", padding: "0px" }}
                  onClick={removeGame}
                >
                  <img
                    style={{
                      width: "20px",
                      paddingBottom: "3px",
                      alignItems: "left",
                    }}
                    src={deleteIcon}
                    alt="Image of Trash Can to Signify Delete Action"
                  ></img>
                </div>
                <div className="col-10"></div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default GameAccordian;
