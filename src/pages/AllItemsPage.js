import React, { useState, useEffect } from "react";
import {
  Container,
  Dropdown,
  Card,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { _allItems } from "../redux/allItems";
import Spinner from "../components/Spinner";

const AllItemsPage = () => {
  const { items, loading } = useSelector((state) => state.allItemsReducer);
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState("Name");

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const text = e.target.text;
    if (text !== undefined) {
      setSearchText(text);
      setSearchValue("");
    }
  };

  const handleSearchInput = (e) => {
    let filteredItems = [];
    const inputValue = e.target.value;
    const inputLength = e.target.value.length;
    setSearchValue(e.target.value);
    if (searchText === "Name" && inputLength > 0) {
      filteredItems = items.filter((item) => item.itemName.includes(e.target.value));
    }
    if (searchText === "Attributes" && inputLength > 0) {
      filteredItems = items.filter((item) => {
        let flag = 0;
        item.attribList.map((attrib) => {
          if (Object.keys(attrib)[0].includes(inputValue)) {
            flag = 1;
          }
        });
        return flag;
      });
    }
    if (searchText === "Values in Attributes" && inputLength > 0) {
      filteredItems = items.filter((item) => {
        let flag = 0;
        item.attribList.map((attrib) => {
          if (Object.values(attrib)[0].includes(inputValue)) {
            flag = 1;
          }
        });
        return flag;
      });
    }
    console.log(filteredItems);
    setFilteredItems(filteredItems);
  };

  useEffect(() => {
    dispatch(_allItems.fetchData());
  }, [dispatch]);
  return loading ? (
    <Spinner />
  ) : (
    <Container style={{ marginTop: "50px" }}>
      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          onClick={handleSearchChange}
          variant="outline-secondary"
          title={searchText}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item>Name</Dropdown.Item>
          <Dropdown.Item>Attributes</Dropdown.Item>
          <Dropdown.Item>Values in Attributes</Dropdown.Item>
        </DropdownButton>
        <FormControl
          onChange={handleSearchInput}
          value={searchValue}
          placeholder="Search..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <Dropdown style={{ paddingBottom: "20px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>name</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {searchValue.length === 0
        ? items.map((item) => (
            <Card key={item._id} style={{ width: "100%" }}>
              <Card.Body style={{ display: "flex" }}>
                <div style={{ paddingRight: "50px" }}>
                  <img style={{ height: "200px", width: "200px" }} src={item.image} alt="" />
                </div>
                <div>
                  <Card.Title>{item.itemName}</Card.Title>
                  {item.attribList.map((attrib, id) =>
                    Object.values(attrib).map((value) => (
                      <p key={id}>{`${Object.keys(attrib)[0]}: ${value}`}</p>
                    ))
                  )}
                  <Button
                    as={Link}
                    style={{ marginRight: "15px" }}
                    to={`/editItem/${item._id}`}
                    variant="primary"
                  >
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </Card.Body>
            </Card>
          ))
        : filteredItems.map((item) => (
            <Card key={item._id} style={{ width: "100%" }}>
              <Card.Body style={{ display: "flex" }}>
                <div style={{ paddingRight: "50px" }}>
                  <img style={{ height: "200px", width: "200px" }} src={item.image} alt="" />
                </div>
                <div>
                  <Card.Title>{item.itemName}</Card.Title>
                  {item.attribList.map((attrib, id) =>
                    Object.values(attrib).map((value) => (
                      <p key={id}>{`${Object.keys(attrib)[0]}: ${value}`}</p>
                    ))
                  )}
                  <Button
                    as={Link}
                    style={{ marginRight: "15px" }}
                    to={`/editItem/${item._id}`}
                    variant="primary"
                  >
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
    </Container>
  );
};

export default AllItemsPage;
