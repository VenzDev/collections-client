import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button, Form, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import showToast from "../utils/showToast";
import { withRouter } from "react-router-dom";
import { createItemEndpoint } from "../apiConfig";

const AddItemPage = (props) => {
  const [attribList, setAttribList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const [itemName, setItemName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState("");
  const { collections } = useSelector((state) => state.collectionsReducer);
  const id = props.match.params.id;
  const _currentCollection = collections.filter((collection) => collection.collectionId == id);
  const currentCollection = _currentCollection[0];

  const handleInput = (attrib, e) => {
    let _attribList = attribList;
    const list = attribList.filter((_attrib) => Object.keys(_attrib)[0] === attrib);
    let newInputValue = { [attrib]: e.target.value };
    if (list.length === 0) {
      _attribList.push(newInputValue);
    } else if (list.length === 1) {
      _attribList = _attribList.filter((_attrib) => Object.keys(_attrib)[0] !== attrib);
      _attribList.push(newInputValue);
    }
    setAttribList(_attribList);
  };

  const handleName = (e) => setItemName(e.target.value);
  const handleDesc = (e) => setDesc(e.target.value);

  const handleSubmit = () => {
    if (itemName === "" || desc === "" || imageFile === "") {
      showToast("Empty Fields!");
      return;
    }
    const finalItem = {
      collectionId: id,
      name: itemName,
      attributes: attribList,
      description: desc,
      image: imageFile,
    };
    setLoading(true);
    axios.post(createItemEndpoint, finalItem).then((res) => {
      if (res.status === 201) {
        showToast("Item successfully created");
        props.history.push("/");
      }
    });
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

  return (
    <Container style={{ marginTop: "20px" }}>
      <div>
        <h4>Create item in {currentCollection.name} collection</h4>
        {imageUrl && (
          <img
            alt="item"
            style={{ width: "250px", height: "250px", marginBottom: "20px" }}
            src={imageUrl}
          ></img>
        )}
        <Form onChange={handleImage}>
          <Form.File
            accept="image/x-png,image/jpeg"
            id="custom-file"
            label={imageUrl ? "Change item image" : "Load your item image"}
            custom
          />
        </Form>
        <InputGroup style={{ marginTop: "20px" }} onChange={handleName} className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Item name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="My fantastic book  "
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup style={{ marginTop: "20px" }} onChange={handleDesc} className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Item Description</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            placeholder="It's my favourite book"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        {currentCollection.attributes.map((attrib, id) => (
          <InputGroup onChange={(e) => handleInput(attrib, e)} key={id} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">{attrib}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>
        ))}
        <div style={{ marginTop: "20px", marginBottom: "40px" }}>
          <Button onClick={handleSubmit} variant="success  ">
            {isLoading ? "Loading... " : "Create Item!"}
            {isLoading && (
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(AddItemPage);
