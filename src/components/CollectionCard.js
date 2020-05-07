import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CollectionCard = ({ collection }) => {
  return (
    <Card>
      <Card.Body>
        <Link to={`/collection/${collection.name}`} style={{ textDecoration: "none" }}>
          <Card.Title>{collection.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Amount: 5</Card.Subtitle>
          <Card.Text>{collection.description}</Card.Text>
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
  );
};

export default CollectionCard;
