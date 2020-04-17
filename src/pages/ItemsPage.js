import React, { useState, useEffect } from "react";
import { Container, Card, Button, Pagination, Dropdown } from "react-bootstrap";
import collect from "../collect.svg";
import { Link } from "react-router-dom";
import itemsJson from "../utils/items.json";

const ItemsPage = () => {
  let items = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [posts, setPosts] = useState(itemsJson.items);
  const [currentPosts, setCurrentPosts] = useState(posts.slice(indexOfFirstPost, indexOfLastPost));

  //Get current posts

  // let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  indexOfLastPost = currentPage * postsPerPage;
  indexOfFirstPost = indexOfLastPost - postsPerPage;

  const handleClick = (number) => {
    setCurrentPage(number);
  };
  const handleItems5 = () => {
    setPostsPerPage(5);
    indexOfLastPost = currentPage * postsPerPage;
    indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  };
  const handleItems10 = () => {
    setPostsPerPage(10);
    indexOfLastPost = currentPage * postsPerPage;
    indexOfFirstPost = indexOfLastPost - postsPerPage;

    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  };
  const handleItems20 = () => setPostsPerPage(20);

  for (let number = 1; number <= Math.ceil(posts.length / postsPerPage); number++) {
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
  console.log(currentPosts);

  const sort = (e) => {
    let list = posts;
    list.sort((a, b) => {
      var keyA = a[e.target.text];
      var keyB = b[e.target.text];

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setPosts(list);
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  };
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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={sort}>
          <Dropdown.Item>name</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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
