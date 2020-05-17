import React, { useEffect } from "react";
import {
  Container,
  Dropdown,
  Pagination,
  Card,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import collect from "../collect.svg";
import { Link } from "react-router-dom";
import { _allItems } from "../redux/allItems";

const AllItemsPage = () => {
  const { items, loading } = useSelector((state) => state.allItemsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_allItems.fetchData());
  }, [dispatch]);
  return loading ? (
    <div>loading</div>
  ) : (
    <Container style={{ marginTop: "50px" }}>
      <InputGroup className="mb-3">
        <FormControl
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
      {items.map((item) => (
        <Card key={item.id} style={{ width: "100%" }}>
          <Card.Body style={{ display: "flex" }}>
            <div style={{ paddingRight: "50px" }}>
              <img style={{ height: "200px", width: "200px" }} src={item.image} alt="" />
            </div>
            <div>
              <Card.Title>{item.itemName}</Card.Title>
              <Card.Text>
                {item.attribList.map((attrib) =>
                  Object.values(attrib).map((value) => (
                    <p>{`${Object.keys(attrib)[0]}: ${value}`}</p>
                  ))
                )}
              </Card.Text>
              <Button as={Link} style={{ marginRight: "15px" }} to="/editItem/1" variant="primary">
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
