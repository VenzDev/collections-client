import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  InputGroup,
  FormControl,
  Form,
  Dropdown,
  ListGroup,
  Button,
} from "react-bootstrap";
import axios from "axios";
import showToast from "../utils/showToast";
import { createItemEndpoint } from "../apiConfig";

const CreateCustomPage = (props) => {
  const [finalAttribList, setFinalAttribList] = useState([]);
  const [attribList, setAttribList] = useState([]);
  const [attribValue, setAttribValue] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("None");

  const { collections } = useSelector((state) => state.collectionsReducer);

  const handleDropdown = (e) => {
    console.log(e.target.text);
    setSelectedCollection(e.target.text);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    const _collection = collections.filter((collection) => collection.name === selectedCollection);
    const finalItem = {
      collectionId: _collection[0]._id,
      attribList: finalAttribList,
      image: imageFile,
      itemName: name,
      description: desc,
    };
    axios.post(createItemEndpoint, finalItem).then((res) => {
      if (res.status === 200) {
        showToast("Item created successfully");
        props.history.push("/");
      }
    });
  };
  const handleClick = () => {
    let list = attribList;
    list.push(attribValue);
    setAttribList(list);
    setAttribValue("");
  };
  const handleDelete = (attrib) => {
    console.log(attrib);
    let list = attribList;
    list = list.filter((item) => item !== attrib);
    setAttribList(list);
    list = finalAttribList;
    list = list.filter((item) => Object.keys(item)[0] !== attrib);
    setFinalAttribList(list);
  };
  const handleImage = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(reader.result);
    };
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleInput = (attrib, e) => {
    let _attribList = finalAttribList;
    const list = finalAttribList.filter((_attrib) => Object.keys(_attrib)[0] === attrib);
    let newInputValue = { [attrib]: e.target.value };
    if (list.length === 0) {
      _attribList.push(newInputValue);
    } else if (list.length === 1) {
      _attribList = _attribList.filter((_attrib) => Object.keys(_attrib)[0] !== attrib);
      _attribList.push(newInputValue);
    }
    setFinalAttribList(_attribList);
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <div>
        <h4>Create custom Item</h4>
        {imageUrl && (
          <img
            alt="item"
            style={{ width: "250px", height: "250px", marginBottom: "20px" }}
            src={imageUrl}
          ></img>
        )}
        <Dropdown style={{ paddingBottom: "20px" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Collection
          </Dropdown.Toggle>

          <Dropdown.Menu onClick={handleDropdown}>
            {collections.map((collection) => (
              <Dropdown.Item key={collection.id}>{collection.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <h5>Selected collection: {selectedCollection} </h5>
        <Form style={{ marginBottom: "20px" }} onChange={handleImage}>
          <Form.File
            accept="image/x-png,image/jpeg"
            id="custom-file"
            label={imageUrl ? "Change item image" : "Load your item image"}
            custom
          />
        </Form>
        <InputGroup onChange={handleName} className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Item name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Book" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>
        <InputGroup onChange={handleDesc}>
          <InputGroup.Prepend>
            <InputGroup.Text>Item description</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" placeholder="My great book" aria-label="With textarea" />
        </InputGroup>
        <h4 style={{ marginTop: "20px" }}>Attributes</h4>
        {attribList.length > 0 ? (
          <ListGroup>
            {attribList.map((attrib, id) => (
              <InputGroup key={id} onChange={(e) => handleInput(attrib, e)} className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">{attrib}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Username" aria-describedby="basic-addon1" />
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
              </InputGroup>
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
            Create Item!
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CreateCustomPage;
