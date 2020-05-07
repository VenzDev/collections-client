import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeletePopup from "./DeletePopup";

const CollectionCard = ({ collection }) => {
  const [isPopup, setPopup] = useState(false);

  const handlePopup = (state) => setPopup(state);
  const closePopup = () => setPopup(false);
  return (
    <>
      {isPopup && <DeletePopup closePopup={closePopup} />}
      <Card>
        <Card.Body>
          <Link to={`/collection/${collection.name}`} style={{ textDecoration: "none" }}>
            <Card.Title>{collection.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Amount: 5</Card.Subtitle>
            <Card.Text>{collection.description}</Card.Text>
          </Link>
          <div style={{ marginTop: "10px" }}>
            <Button href={`/addItem/${collection.name}`} variant="success">
              Add Item
            </Button>
            <Button
              href={`/edit/${collection.name}`}
              style={{ marginLeft: "10px" }}
              variant="primary"
            >
              Edit
            </Button>
            <Button
              onClick={() => handlePopup(true)}
              style={{ marginLeft: "10px" }}
              variant="danger"
              href="#"
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CollectionCard;
