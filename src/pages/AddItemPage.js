import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import showToast from "../utils/showToast";
import { withRouter } from "react-router-dom";
import { createItemEndpoint } from "../apiConfig";

const AddItemPage = (props) => {
  const [attribList, setAttribList] = useState([]);
  const [itemName, setItemName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState("");
  const { collections } = useSelector((state) => state.collectionsReducer);
  const id = props.match.params.id;
  const _currentCollection = collections.filter((collection) => collection._id === id);
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

  const handleSubmit = () => {
    axios
      .post(createItemEndpoint, {
        collectionId: id,
        itemName,
        attribList,
        image: imageFile,
      })
      .then((res) => {
        if (res.status === 200) {
          showToast("Item created successfully");
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
            Create Item!
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(AddItemPage);
