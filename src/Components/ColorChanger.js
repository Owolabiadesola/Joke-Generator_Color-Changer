import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const changeColor = () => {
    const colors = [
      "red",
      "orangered",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "gold",
      "white",
      "tomato",
      "cyna",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          className="body"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="logo">
            <b>Color Changer</b>
          </div>
          <p className="sample">This is a simple color changer</p>
          <button id="button" onClick={changeColor}>
            Change Color
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ColorChanger;
