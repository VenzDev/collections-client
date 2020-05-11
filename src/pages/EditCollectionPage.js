import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";

const EditCollectionPage = (props) => {
  const { collections } = useSelector((state) => state.collectionsReducer);
  const id = props.match.params.id;
  const _currentCollection = collections.filter((collection) => collection.id === id);
  const currentCollection = _currentCollection[0];
  const [name, setName] = useState(currentCollection.name);
  const [desc, setDesc] = useState(currentCollection.description);
  const [attribList, setAttribList] = useState(currentCollection.attributes);
  const [attribValue, setAttribValue] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSubmit = () => {
    console.log(name, desc);
  };
  const handleDelete = () => {};
  const handleClick = () => {};
  return (
    <Container>
      {" "}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Collection Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={handleName}
          value={name}
          placeholder="Books"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Collection description</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={handleDesc}
          as="textarea"
          value={desc}
          placeholder="My great collection of books!"
          aria-label="With textarea"
        />
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
        <Button variant="primary" onClick={handleSubmit}>
          Edit Collection!
        </Button>
      </div>
    </Container>
  );
};

export default EditCollectionPage;
