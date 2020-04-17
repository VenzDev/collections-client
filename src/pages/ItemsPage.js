import React, { useState } from "react";
import { Container, Card, Button, Pagination } from "react-bootstrap";
import collect from "../collect.svg";
import { Link } from "react-router-dom";
import itemsJson from "../utils/items.json";

const ItemsPage = () => {
  let items = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = itemsJson.items.slice(indexOfFirstPost, indexOfLastPost);

  const handleClick = (number) => {
    setCurrentPage(number);
  };
  const handleItems5 = () => setPostsPerPage(5);
  const handleItems10 = () => setPostsPerPage(10);
  const handleItems20 = () => setPostsPerPage(20);

  for (let number = 1; number <= Math.ceil(itemsJson.items.length / postsPerPage); number++) {
    items.push(
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
  return (
    <Container style={{ marginTop: "50px" }}>
      <div style={{ display: "flex" }}>
        <Pagination>{items}</Pagination>
        <h5 style={{ left: "30%", position: "absolute" }}>
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

      {currentPosts.map((item) => (
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
