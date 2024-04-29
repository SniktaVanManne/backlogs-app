import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const SearchGame = () => {
  const [listedGames, setListedGames] = useState([]);
  const [query, setQuery] = useState();
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  // Access "ajl315tcw7zmrk4lnuelx4rvwe7qcu"
  // Expires in 5575950 June 27th

  //   async function getAuth() {
  //     const options = {
  //       method: "POST",
  //       url: "https://id.twitch.tv/oauth2/token?client_id=b1a1893c4fdxhm0udfx7xjw6yneern&client_secret=bj5mk4ohlbsjeqg4ww1dqurzqp790q&grant_type=client_credentials",
  //       //   params: {
  //       //     criteria: searchQuery,
  //       //   },
  //       //   headers: {
  //       //     "X-RapidAPI-Key": "d6ee498e9emsh2cb162c0cdeeebcp1f031ajsn26f5d6ae32ea",
  //       //     "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
  //       //   },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       //setListedGames(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  const showModal = () => {
    return (
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Game has been added to your Backlogs! Make sure to manually update the
          Hours to Beat!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  async function searchGame() {
    let searchQuery = query.trim();

    const options = {
      method: "GET",
      url: "https://opencritic-api.p.rapidapi.com/game/search",
      params: {
        criteria: searchQuery,
      },
      headers: {
        "X-RapidAPI-Key": "d6ee498e9emsh2cb162c0cdeeebcp1f031ajsn26f5d6ae32ea",
        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      setListedGames(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getGame(gameID) {
    const options = {
      method: "GET",
      url: "https://opencritic-api.p.rapidapi.com/game/" + gameID,
      headers: {
        "X-RapidAPI-Key": "d6ee498e9emsh2cb162c0cdeeebcp1f031ajsn26f5d6ae32ea",
        "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      addGame(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const addGame = (queriedGame) => {
    let tempGameList = localStorage.getItem("gamesList")
      ? JSON.parse(localStorage.getItem("gamesList"))
      : [];

    let newGame = {
      id: queriedGame.name + Math.floor(10 * Math.random()),
      name: queriedGame.name,
      imgURL: "https://img.opencritic.com/" + queriedGame.images.masthead.xl,
      description: queriedGame.description,
      criticScore: queriedGame.medianScore,
      steamScore: queriedGame.percentRecommended,
      hoursToBeat: 0,
      weightedScore: null,
      tags: ["Horror", "Action"],
    };

    let tempTags = [];

    queriedGame.Genres.map((genre) => {
      tempTags.push({ id: genre.id, name: genre.name });
    });

    newGame.tags = tempTags;
    newGame.weightedScore = newGame.steamScore * newGame.criticScore;
    console.log(newGame.weightedScore);

    tempGameList.push(newGame);

    //TODO Prevent adding multiples of Same Game!

    let stringList = JSON.stringify(tempGameList);

    localStorage.setItem("gamesList", stringList);

    //TODO Show Name of Game Added!
    setModalShow(true);

    return;
  };

  return (
    <div>
      {modalShow && showModal()}
      <input
        id="searchBox"
        type="text"
        defaultValue="Enter a Name"
        onClick={(event) => {
          event.target.value = "";
        }}
        onBlur={(event) => {
          setQuery(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          searchGame();
        }}
      >
        Search!{" "}
      </button>

      <ul className="list-group">
        {listedGames.length > 0 ? (
          listedGames.map((game) => {
            return (
              <li key={game.id} className="list-group-item">
                <div className="container">
                  <div className="row align-items-start">
                    <div className="col">{game.name}</div>
                    <div className="col">
                      <Button
                        key={game.id}
                        onClick={() => {
                          getGame(game.id);
                        }}
                        style={{
                          fontSize: "12px",
                          backgroundColor: "#0EE4F1",
                          color: "#044699",
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <h2>No search yet</h2>
        )}
      </ul>
    </div>
  );
};

export default SearchGame;
