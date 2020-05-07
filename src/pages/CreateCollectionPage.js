import React, { useState } from "react";
import { Container, InputGroup, FormControl, ListGroup, Button } from "react-bootstrap";

const CreateCollectionPage = () => {
  const [attribList, setAttribList] = useState([]);
  const [attribValue, setAttribValue] = useState("");

  const handleClick = () => {
    let list = attribList;
    list.push(attribValue);
    setAttribList(list);
    setAttribValue("");
  };
  const handleDelete = (attrib) => {
    let list = attribList;
    list = list.filter((item) => item !== attrib);
    setAttribList(list);
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <div>
        <h4>General Information</h4>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Collection Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Books" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Collection description</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        <h4 style={{ marginTop: "20px" }}>Attributes</h4>
        {attribList.length > 0 ? (
          <ListGroup>
            {attribList.map((attrib, key) => (
              <ListGroup.Item key={key}>
                {attrib}{" "}
                <Button
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  onClick={() => handleDelete(attrib)}
                  variant={"danger"}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <ListGroup>
            <ListGroup.Item>No attributes</ListGroup.Item>
          </ListGroup>
        )}
        <InputGroup style={{ marginTop: "20px" }} className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">New attribute</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={(e) => {
              setAttribValue(e.target.value);
            }}
            value={attribValue}
            placeholder="Your attribute"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button onClick={handleClick} variant="secondary">
          Add attribute
        </Button>
        <div style={{ marginTop: "20px" }}>
          <Button variant="primary">Create Collection!</Button>
        </div>
      </div>
    </Container>
  );
};

export default CreateCollectionPage;