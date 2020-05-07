import React, { useEffect, useState } from "react";
import { Container, Card, Button, Pagination, Dropdown } from "react-bootstrap";
import collect from "../collect.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { collectionItems } from "../redux/collectionItem";

const ItemsPage = () => {
  let navItems = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.collectionItemsReducer);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

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
  const handleItems5 = () => setItemsPerPage(5);
  const handleItems10 = () => setItemsPerPage(10);
  const handleItems20 = () => setItemsPerPage(20);

  const sort = (e) => {
    let _items = items;

    _items.sort((a, b) => {
      var keyA = a[e.target.text];
      var keyB = b[e.target.text];

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    dispatch(collectionItems.changeData(_items));
  };

  useEffect(() => {
    dispatch(collectionItems.fetchData());
  }, [dispatch]);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  return loading ? (
    <div>loading</div>
  ) : (
    <Container style={{ marginTop: "50px" }}>
      <div style={{ display: "flex" }}>
        <Pagination>{navItems}</Pagination>
        <h5 style={{ right: "15%", position: "absolute" }}>
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
      <Dropdown style={{ paddingBottom: "20px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={sort}>
          <Dropdown.Item>name</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {currentItems.map((item) => (
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

export default ItemsPage;
