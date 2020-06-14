import React, { useState } from "react";
import { Container, InputGroup, FormControl, ListGroup, Button } from "react-bootstrap";
import axios from "axios";
import showToast from "../utils/showToast";
import { withRouter } from "react-router-dom";
import { createCollectionEndpoint } from "../apiConfig";

const CreateCollectionPage = (props) => {
  const [attribList, setAttribList] = useState([]);
  const [attribValue, setAttribValue] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

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
  const handleSubmit = () => {
    axios
      .post(createCollectionEndpoint, {
        name: name,
        description: desc,
        attributes: attribList,
      })
      .then((response) => {
        if (response.status === 201) {
          showToast("Collection created!");
          props.history.push("/");
        }
      });
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <div>
        <h4>General Information</h4>
        <InputGroup onChange={handleName} className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Collection Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Books" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>
        <InputGroup onChange={handleDesc}>
          <InputGroup.Prepend>
            <InputGroup.Text>Collection description</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
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
                    zIndex: "100",
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
            Create Collection!
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(CreateCollectionPage);
