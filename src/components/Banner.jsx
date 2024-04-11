import React, { useState } from "react";
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

  const goToList = () => {
    setIsAdd(false);
    console.log("Is Add: " + isAdd);

    props.onSendIsAdd(isAdd);
    console.log("Is Add: " + isAdd);
  };

  const goToForm = () => {
    setIsAdd(true);
    console.log("Is Add: " + isAdd);

    props.onSendIsAdd(isAdd);
    console.log("Is Add: " + isAdd);
  };

  return (
    <div className="Banner">
      <h1>Welcome to the Backlogs!</h1>
      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item" onClick={goToList}>
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              What to Play Next
            </a>
          </li>
          <li className="nav-item" onClick={goToForm}>
            <a className="nav-link active" aria-current="page" style={tabStyle}>
              Add a Game
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
