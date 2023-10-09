
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logoomz (1).svg';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import '../styles/Navbarmain.css';
const MyModal = ({ show, handleClose }) => {
    return (
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{backgroundColor:'black',color:'grey' }} >
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'black',color:'grey' }}>
          {/* Your modal content goes here */}
          <p>Contents</p>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'black',color:'grey' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
function Navbarmain() {
  
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    }; 

  
  return (
   

  
<div >

      <Navbar className='navbar navbar-expand-lg navbar-sm fixed-top 'style={{ height: '45px',backgroundColor:'black',width:'auto',  maxWidth: '100%',position:'fixed'}} data-bs-theme="dark" >
      <Button variant="grey"  >
      <img src={logo}alt="logo" />
      </Button>
        <Container >   
        <Nav variant="pills-secondary" className='flex-row' >
      <Nav.Item >
        <Nav.Link  as={NavLink}to="/openmynz" activeClassName="active">Openmynz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/link1"  activeClassName="active">Link1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/link2"  activeClassName="active">
          Link2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  as={NavLink}to="/link3"  activeClassName="active">
          Link3
        </Nav.Link>
      </Nav.Item>
     
    </Nav>
    
        </Container> 
      <Button variant="grey" className="iconflex"  >
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512">
          <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" fill='grey' />
        </svg>
      </Button> <Button variant="grey" >
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
          <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z " fill='grey'/>
        </svg>
      </Button>
      <Button variant='grey' onClick={handleShowModal}>
      <Image    width="24" height="24"src="https://th.bing.com/th/id/OIP.B2bRgxGf-SkgQD63rlZqhQHaHa?pid=ImgDet&rs=1" rounded />
 
      </Button>
      
    <MyModal show={showModal} handleClose={handleCloseModal} />
     
       
   
      </Navbar>
      </div>
  );
}

export default Navbarmain;