import React, { useState }from "react";
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

const Navigationbar = () => {
  {/*
    const [showModal, setShowModal] = useState(false);
  
    const handleModalShow = () => {
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    }; 
  */}
    return (
      <Navbar expand="lg" id="navbar-color" >
      {/*<Container>    className="bg-body-tertiary"*/}
        <Navbar.Brand className="p-3" href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/Cart">Cart</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>        
      {/*</Container>*/}
    </Navbar>
    );
}
export default Navigationbar;