import "./App.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg" className="navbar-dark-custom">
          <Container>
            <Navbar.Brand href="#home">
              <img id="imsa" src="https://www.prevoyancesolutions.com/Content/img/prevoyance-logo-2.png" alt="Prevoyance Solutions Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                <Nav.Link as={Link} to="/About">About</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;