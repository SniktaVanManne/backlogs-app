import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";

const SortGames = (props) => {
  const [sortType, setSortType] = useState();
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const showModal = () => {
    return (
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cannot Sort Games</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          One or more games is missing an "Hours to Beat Value"
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const sortGames = (desiredHours) => {
    if (!localStorage.getItem("gamesList")) {
      return;
    }

    let tempGamesList = JSON.parse(localStorage.getItem("gamesList"));

    tempGamesList.map((game) => {
      if (!game.hoursToBeat) {
        handleShow();
      }
    });

    if (desiredHours) {
      console.log("Entered with Hours");
      tempGamesList.sort((a, b) => {
        return (
          b.weightedScore / Math.pow(b.hoursToBeat - desiredHours, 2) -
          a.weightedScore / Math.pow(a.hoursToBeat - desiredHours, 2)
        );
      });
    } else {
      tempGamesList.sort((a, b) => {
        return (
          b.weightedScore / b.hoursToBeat - a.weightedScore / a.hoursToBeat
        );
      });
    }

    localStorage.setItem("gamesList", JSON.stringify(tempGamesList));
    props.sendToApp(desiredHours);
  };

  const sortGamesAlpha = () => {
    if (!localStorage.getItem("gamesList")) {
      return;
    }

    let tempGamesList = JSON.parse(localStorage.getItem("gamesList"));

    if (!sortType || sortType === "reverseAlpha") {
      setSortType("alpha");
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
    } else if (sortType === "alpha") {
      setSortType("reverseAlpha");
      tempGamesList.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
    }

    localStorage.setItem("gamesList", JSON.stringify(tempGamesList));
    props.sendToApp(sortType);
  };

  return (
    <div style={{ paddingTop: "42px", paddingLeft: "15px" }}>
      {modalShow && showModal()}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Organize Your Backlog</h5>
          <hr />

          <p className="card-text" style={{ fontSize: "12px" }}>
            Organize your Backlog to get through it as efficiently and enjoyably
            as possible. Or if you know how long of an adventure you'd like to
            start, select a length and get a recommendation!
          </p>
          <Button
            onClick={() => {
              sortGames(null);
            }}
            style={{
              fontSize: "10px",
              marginRight: "5px",
              backgroundColor: "#0EE4F1",
              color: "#044699",
            }}
          >
            Organize Backlogs
          </Button>
          <Button
            onClick={sortGamesAlpha}
            style={{
              fontSize: "10px",
              backgroundColor: "#0EE4F1",
              color: "#044699",
            }}
          >
            Organize {sortType !== "alpha" ? "A-Z" : "Z-A"}
          </Button>
        </div>
      </div>
      <DropdownButton
        align="end"
        title="Recommend ..."
        id="dropdown-menu-align-end"
      >
        <Dropdown.Item
          eventKey="1"
          onClick={() => {
            sortGames(2.5);
          }}
        >
          An adventure for an afternoon: 1-4 Hours
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          onClick={() => {
            sortGames(7.5);
          }}
        >
          An adventure lasting a weekend: 5-10 Hours
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          onClick={() => {
            sortGames(15.5);
          }}
        >
          An adventure lasting a week or two: 10-20 Hours
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="4"
          onClick={() => {
            sortGames(30.5);
          }}
        >
          An adventure lasting a month: 20-40 Hours
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="5"
          onClick={() => {
            sortGames(60.5);
          }}
        >
          An adventure lasting a season: 40-80 Hours
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="6"
          onClick={() => {
            sortGames(90.5);
          }}
        >
          An epic: 80+ Hours
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          eventKey="7"
          onClick={() => {
            sortGames(Math.random() * 100);
          }}
        >
          Surprise Me!
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default SortGames;
