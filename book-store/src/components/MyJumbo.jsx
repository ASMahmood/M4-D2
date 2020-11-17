import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "../App.css";

const MyJumbo = () => {
  return (
    <Jumbotron fluid className="jumboBG d-flex align-items-center">
      <Container>
        <h1>Book Strap</h1>
        <p style={{ color: "white" }}>
          Cool, thought-provoking slogan about book straps and books.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default MyJumbo;
