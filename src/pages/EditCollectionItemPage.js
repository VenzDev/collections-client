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
import { withRouter } from "react-router-dom";
import showToast from "../utils/showToast";
import { editItemEndpoint } from "../apiConfig";

const EditCollectionItemPage = (props) => {
  const id = props.match.params.id;
  const { items } = useSelector((state) => state.collectionItemsReducer);
  let item = items.filter((_item) => _item.entryId === id);
  item = item[0];
  let strangeList = [];
  item.attributes.map((attr) => strangeList.push(Object.keys(attr)[0]));

  const { collections } = useSelector((state) => state.collectionsReducer);
  let _collection = collections.filter(
    (collection) => collection.collectionId === item.collectionId
  );
  _collection = _collection[0];

  const [finalAttribList, setFinalAttribList] = useState(item.attributes);
  const [attribList, setAttribList] = useState(strangeList);
  const [attribValue, setAttribValue] = useState("");
  const [name, setName] = useState(item.name);
  const [desc, setDesc] = useState(item.description);
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(item.image);
  const [selectedCollection, setSelectedCollection] = useState(_collection.name);

  const handleDropdown = (e) => {
    setSelectedCollection(e.target.text);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    const __collection = collections.filter((collection) => collection.name === selectedCollection);
    const finalItem = {
      entryId: id,
      collectionId: __collection._id,
      attributes: finalAttribList,
      image: imageFile,
      name: name,
      description: desc,
    };

    axios.post(editItemEndpoint, finalItem).then((res) => {
      if (res.status === 200) {
        showToast("Item updated Successfully!");
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
    let list = attribList;
    list = list.filter((item) => item !== attrib);
    setAttribList(list);
    list = finalAttribList;
    list = list.filter((item) => Object.keys(item)[0] !== attrib);
    setFinalAttribList(list);
  };
  const handleImage = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
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
  const getInitValue = (attrib) => {
    if (attrib === null || attrib === undefined) return "";
    const _value = item.attributes.filter((_attrib) => Object.keys(_attrib)[0] === attrib);
    if (_value.length === 0) return "";
    return Object.values(_value[0])[0];
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <div>
        <h4>Edit Item</h4>
        {(imageUrl || imageFile) && (
          <img
            alt="item"
            style={{ width: "250px", height: "250px", marginBottom: "20px" }}
            src={imageUrl || imageFile}
          ></img>
        )}
        <Dropdown style={{ paddingBottom: "20px" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedCollection === ""
              ? "Select Collection"
              : `Selected Collection:  ${selectedCollection}`}
          </Dropdown.Toggle>

          <Dropdown.Menu onClick={handleDropdown}>
            {collections.map((collection) => (
              <Dropdown.Item key={collection.id}>{collection.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form style={{ marginBottom: "20px" }} onChange={handleImage}>
          <Form.File
            accept="image/x-png,image/jpeg"
            id="custom-file"
            label={imageUrl ? "Change item image" : "Load your item image"}
            custom
          />
        </Form>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Item name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={handleName}
            value={name}
            placeholder="Book"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
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
              <InputGroup onChange={(e) => handleInput(attrib, e)} key={id} className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">{attrib}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  defaultValue={getInitValue(attrib)}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <Button
                  style={{
                    zindex: "100",
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
            Edit Item!
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(EditCollectionItemPage);
