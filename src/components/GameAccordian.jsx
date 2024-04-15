import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./GameAccordian.css";

const GameAccordian = (props) => {
  return (
    <div className="container">
      <Accordion className="Accordian">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.name}</Accordion.Header>
          <Accordion.Body>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    style={{ borderRadius: "5%", marginTop: "50px" }}
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
                  <p>{props.hoursToBeat} Hours</p>
                  <hr />
                  <h4>Tags</h4>

                  {props.tags.map((tag) => {
                    return <div key={tag}>{tag}</div>;
                  })}
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default GameAccordian;
