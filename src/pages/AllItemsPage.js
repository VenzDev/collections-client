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
              <img style={{ height: "150px" }} src={collect} alt="" />
            </div>
            <div>
              <Card.Title as={Link} to="/item/1">
                {item.name}
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button variant="danger">Delete</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AllItemsPage;
