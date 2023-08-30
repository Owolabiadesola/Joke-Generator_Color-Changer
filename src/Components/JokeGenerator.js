import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class JokeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      message: "What is the smartest insect? A spelling bee!",
    };
  }
  changeMessage() {
    this.setState({
      message: "Name of a tree you can hold in your hand is palm tree",
    });
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="jkbody my-2">
            <div className="jkdiv">
              <h1 className="jkheading">A Joke Generator</h1>
              <p className="joke" id="joke">
                Jokes
              </p>
              <button
                className="jkbtn"
                id="jkbtn"
                onClick={() => this.changeMessage()}
              >
                TELL ME A JOKE
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
