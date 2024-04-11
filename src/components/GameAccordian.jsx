import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./GameAccordian.css";

const GameAccordian = () => {
  return (
    <div className="container">
      <Accordion className="Accordian">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Soma</Accordion.Header>
          <Accordion.Body>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    style={{ borderRadius: "5%", marginTop: "50px" }}
                    src="https://upload.wikimedia.org/wikipedia/en/2/21/Soma_Game_Art.png"
                  />
                </div>
                <div className="col">
                  <h1>Soma</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col">
                  <h2 style={{ marginTop: "50px" }}>Steam</h2>
                  <p>96% OverWhelmingly Positive</p>
                  <h2>MetaCritic</h2>
                  <p>84</p>
                  <hr />
                  <h3>Hours to Beat</h3>
                  <p>13.3 Hours</p>
                  <hr />
                  <h4>Tags</h4>
                  <p>
                    Horror, Thriller, First Person, Story-Rich, Psychological
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default GameAccordian;
