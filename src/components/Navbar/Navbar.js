import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Welcome
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/user-form">
          User Form
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/camera-label-switcher">
          Camera Label Switcher
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/products/">
          Products
        </Nav.Link>
      </Nav.Item>

  
    </Nav>
  );
}
