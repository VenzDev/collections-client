import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import collect from "../collect.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="sm" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to={""}>
          <img alt="" src={collect} width="30" height="30" className="d-inline-block align-top" />{" "}
          Collect.
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={""}>
            Your Collections
          </Nav.Link>
          <Nav.Link as={Link} to={"/create"}>
            Create Collection
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
