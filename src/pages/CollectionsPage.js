import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./collectionPageStyle.scss";
import { Link } from "react-router-dom";

const CollectionsPage = () => {
  return (
    <Container>
      <div className="collectionContainer">
        <Card>
          <Card.Body>
            <Link to="/collection/books" style={{ textDecoration: "none" }}>
              <Card.Title>Książki</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Amount: 5</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Link>
            <div style={{ marginTop: "10px" }}>
              <Button href="#" variant="success">
                Add Item
              </Button>
              <Button style={{ marginLeft: "10px" }} variant="primary" href="#">
                Edit
              </Button>
              <Button style={{ marginLeft: "10px" }} variant="danger" href="#">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/collection/books" style={{ textDecoration: "none" }}>
              <Card.Title>Książki</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Amount: 5</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Link>
            <div style={{ marginTop: "10px" }}>
              <Button href="#">Edit</Button>
              <Button style={{ marginLeft: "10px" }} variant="danger" href="#">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/collection/books" style={{ textDecoration: "none" }}>
              <Card.Title>Książki</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Amount: 5</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Link>
            <div style={{ marginTop: "10px" }}>
              <Button href="#">Edit</Button>
              <Button style={{ marginLeft: "10px" }} variant="danger" href="#">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/collection/books" style={{ textDecoration: "none" }}>
              <Card.Title>Książki</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Amount: 5</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Link>
            <div style={{ marginTop: "10px" }}>
              <Button href="#">Edit</Button>
              <Button style={{ marginLeft: "10px" }} variant="danger" href="#">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/collection/books" style={{ textDecoration: "none" }}>
              <Card.Title>Książki</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Amount: 5</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Link>
            <div style={{ marginTop: "10px" }}>
              <Button href="#">Edit</Button>
              <Button style={{ marginLeft: "10px" }} variant="danger" href="#">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default CollectionsPage;
