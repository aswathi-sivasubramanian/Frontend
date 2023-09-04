import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './Sidebar.css'; // Create a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <Nav className="flex-column" >
        <Nav.Link href="/home" active={window.location.pathname === '/home'}>
          Home
        </Nav.Link>
        <Nav.Link href="/about" active={window.location.pathname === '/about'}>
          About
        </Nav.Link>
        <Nav.Link href="/services" active={window.location.pathname === '/services'}>
          Services
        </Nav.Link>
        <Nav.Link href="/contact" active={window.location.pathname === '/contact'}>
          Contact
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
