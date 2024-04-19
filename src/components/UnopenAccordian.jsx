import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./GameAccordian.css";

const UnopenAccordian = (props) => {
  return (
    <div className="container">
      <Accordion className={props.style}>
        <Accordion.Item eventKey={props.id}>
          <Accordion.Header>{props.name}</Accordion.Header>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default UnopenAccordian;
