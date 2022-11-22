import React from "react"
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Header (){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="text-center">
        <Navbar.Brand as={Link} to="/aboutMe"> Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/skills">Tech Skills</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
              <Nav.Link as={Link} to="/projects">Current Projects</Nav.Link>
              <Nav.Link as={Link} to="/education">Educational Adventure</Nav.Link>
              <Nav.Link as={Link} to="/workHistory">Work History</Nav.Link>
              <Nav.Link as={Link} to="/contactMe">Contact Me!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header