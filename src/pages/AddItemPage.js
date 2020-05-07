import React, { useState } from "react";
import { Container, InputGroup, FormControl, ListGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddItemPage = (props) => {
  const [attribList, setAttribList] = useState([]);
  const [itemName, setItemName] = useState("");
  const { collections } = useSelector((state) => state.collectionsReducer);
  const id = props.match.params.id;
  const _currentCollection = collections.filter((collection) => collection.id === id);
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
    console.log({ collectionId: id, itemName, attribList });
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <div>
        <h4>Create item in {currentCollection.name} collection</h4>
        <InputGroup onChange={handleName} className="mb-3">
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
        <div style={{ marginTop: "20px" }}>
          <Button onClick={handleSubmit} variant="success  ">
            Create Item!
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AddItemPage;
