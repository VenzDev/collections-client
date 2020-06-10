import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import DeletePopup from "./DeletePopup";

const CollectionCard = ({ collection }) => {
  const [isPopup, setPopup] = useState(false);
  const handlePopup = (state) => setPopup(state);
  const closePopup = () => setPopup(false);
  console.log(collection);
  return (
    <>
      {isPopup && <DeletePopup closePopup={closePopup} collectionId={collection.collectionId} />}
      <Card style={{ margin: "20px" }}>
        <Card.Body>
          <Link to={`/collection/${collection.collectionId}`} style={{ textDecoration: "none" }}>
            <Card.Title>{collection.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Amount: 5</Card.Subtitle>
            <Card.Text>{collection.description}</Card.Text>
          </Link>
          <div style={{ marginTop: "10px" }}>
            <Button as={Link} to={`/addItem/${collection._id}`} variant="success">
              Add Item
            </Button>
            <Button
              as={Link}
              to={`/edit/${collection.collectionId}`}
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

export default withRouter(CollectionCard);
