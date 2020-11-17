import React from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import "../App.css";
import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";

class LatestRelease extends React.Component {
  state = {
    genre: fantasyBooks,
  };

  render() {
    console.log(this.state.genre);
    return (
      <Container>
        <Row>
          <Col>
            <h1>Latest Releases: {this.state.genre[0].category}</h1>
            <hr />
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#"
                  onClick={() => this.setState({ genre: fantasyBooks })}
                >
                  Fantasy
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => this.setState({ genre: historyBooks })}
                >
                  History
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => this.setState({ genre: horrorBooks })}
                >
                  Horror
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => this.setState({ genre: romanceBooks })}
                >
                  Romance
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => this.setState({ genre: scifiBooks })}
                >
                  Sci-Fi
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="justify-content-between text-center">
          {this.state.genre.map((item) => (
            <Card className="my-3" style={{ width: "16rem" }} key={item.asin}>
              <Card.Img variant="top" height={380} src={item.img} />
              <Card.Body className="d-none">
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
  }
}

export default LatestRelease;
