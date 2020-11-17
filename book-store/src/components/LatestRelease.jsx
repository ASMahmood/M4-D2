import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";
import items from "../data/fantasy.json";

const LatestRelease = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Latest Releases</h1>
        </Col>
      </Row>
      <Row className="justify-content-between text-center">
        {items.map((item) => (
          <Card className="my-3" style={{ width: "16rem" }} key={item.asin}>
            <Card.Img variant="top" height={380} src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="d-flex justify-content-around">
                <span>{item.category}</span>
                <span>£{item.price}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default LatestRelease;
