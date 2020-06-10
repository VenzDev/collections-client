import React, { useState, useEffect } from "react";
import {
  Container,
  Dropdown,
  Card,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Pagination,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { collectionItems } from "../redux/collectionItem";
import Spinner from "../components/Spinner";
import DeleteItemPopup from "../components/DeleteItemPopup";

const ItemsPage = (props) => {
  let navItems = [];
  const { items, loading } = useSelector((state) => state.collectionItemsReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState("Name");
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const [isPopup, setPopup] = useState(false);
  const closePopup = () => setPopup(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  let currentFilteredItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  if (searchValue.length > 0) {
    for (let number = 1; number <= Math.ceil(filteredItems.length / itemsPerPage); number++) {
      navItems.push(
        <Pagination.Item
          onClick={() => {
            handleClick(number);
          }}
          key={number}
          active={number === currentPage}
        >
          {number}
        </Pagination.Item>
      );
    }
  } else {
    for (let number = 1; number <= Math.ceil(items.length / itemsPerPage); number++) {
      navItems.push(
        <Pagination.Item
          onClick={() => {
            handleClick(number);
          }}
          key={number}
          active={number === currentPage}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const text = e.target.text;
    if (text !== undefined) {
      setSearchText(text);
      setSearchValue("");
    }
  };
  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const handleDelete = (itemId) => {
    setPopup(true);
    setItemIdToDelete(itemId);
  };

  const handleItems5 = () => setItemsPerPage(5);
  const handleItems10 = () => setItemsPerPage(10);
  const handleItems20 = () => setItemsPerPage(20);

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
    dispatch(collectionItems.fetchData(props.match.params.id));
  }, [dispatch]);
  return loading ? (
    <Spinner />
  ) : (
    <Container style={{ marginTop: "50px" }}>
      {isPopup && <DeleteItemPopup handleClose={closePopup} itemId={itemIdToDelete} />}
      <div style={{ display: "flex" }}>
        <div style={{ height: "50px" }}>
          <Pagination>{navItems}</Pagination>
        </div>
        <h5 style={{ right: "22%", position: "absolute" }}>
          Items per page
          <span style={{ color: "blue", cursor: "pointer" }} onClick={handleItems5}>
            {" "}
            5{" "}
          </span>
          <span style={{ color: "blue", cursor: "pointer" }} onClick={handleItems10}>
            {" "}
            10{" "}
          </span>
          <span style={{ color: "blue", cursor: "pointer" }} onClick={handleItems20}>
            {" "}
            20{" "}
          </span>
        </h5>
      </div>
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
          <Dropdown.Item>Item Name</Dropdown.Item>
          <Dropdown.Item>Item Description</Dropdown.Item>
          <Dropdown.Item>Created at</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {searchValue.length === 0
        ? currentItems.map((item) => (
            <Card key={item._id} style={{ width: "100%" }}>
              <Card.Body style={{ display: "flex" }}>
                <div style={{ paddingRight: "50px" }}>
                  <img style={{ height: "250px", width: "250px" }} src={item.image} alt="" />
                </div>
                <div>
                  <Card.Title>{item.itemName}</Card.Title>
                  <Card.Text>
                    Description: description for this item, it' huge item ale i like this
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    {item.attribList.map((attrib, id) =>
                      Object.values(attrib).map((value) => (
                        <ListGroupItem key={id}>{`${
                          Object.keys(attrib)[0]
                        }: ${value}`}</ListGroupItem>
                      ))
                    )}
                  </ListGroup>
                  <Button
                    as={Link}
                    style={{ marginRight: "15px", marginTop: "15px" }}
                    to={`/editItem/${item._id}`}
                    variant="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    style={{ marginTop: "15px" }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        : currentFilteredItems.map((item) => (
            <Card key={item._id} style={{ width: "100%" }}>
              <Card.Body style={{ display: "flex" }}>
                <div style={{ paddingRight: "50px" }}>
                  <img style={{ height: "250px", width: "250px" }} src={item.image} alt="" />
                </div>
                <div>
                  <Card.Title>{item.itemName}</Card.Title>
                  <Card.Text>
                    Description: description for this item, it' huge item ale i like this
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    {item.attribList.map((attrib, id) =>
                      Object.values(attrib).map((value) => (
                        <ListGroupItem key={id}>{`${
                          Object.keys(attrib)[0]
                        }: ${value}`}</ListGroupItem>
                      ))
                    )}
                  </ListGroup>
                  <Button
                    as={Link}
                    style={{ marginRight: "15px", marginTop: "15px" }}
                    to={`/editItem/${item._id}`}
                    variant="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    style={{ marginTop: "15px" }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
    </Container>
  );
};

export default ItemsPage;
