import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./GameAccordian.css";
import deleteIcon from "../imgs/delete.png";

const GameAccordian = (props) => {
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
                  <p>{props.steamScore}</p>
                  <h2>MetaCritic</h2>
                  <p>{props.criticScore}</p>
                  <hr />
                  <h3>Hours to Beat</h3>
                  {props.hoursToBeat > 100 ? (
                    <p>{props.hoursToBeat}+ Hours</p>
                  ) : (
                    <p>{props.hoursToBeat} Hours</p>
                  )}
                  <hr />
                  <h4>Tags</h4>

                  {props.tags.map((tag) => {
                    return <div key={tag}>{tag}</div>;
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
