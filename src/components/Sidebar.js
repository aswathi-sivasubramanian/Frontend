import React,{ useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../styles/Sidebar.css';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link

const CustomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{ fill: 'grey', marginRight: '20px',backgroundColor:'transparent' }}>
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0z" />
  </svg>
);

const Sidebar = ({ cen, setCen }) => {


  const [showAdditionalLinks, setShowAdditionalLinks] = useState(false);

  const toggleAdditionalLinks = () => {
    setShowAdditionalLinks(!showAdditionalLinks);
  };
  return (
    <div className="sidebar">
     
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/slink1" activeClassName="active"  onClick={toggleAdditionalLinks}> {/* Use NavLink */}
          <CustomIcon  /> Map
        </Nav.Link>
        {showAdditionalLinks && (
          <div className="mapexten">
            <ul>
            <li>
          <a href='#' activeClassName="active" onClick={() => setCen([77.22, 28.61])}>
            Delhi
          </a>
        </li>
        <li>
          <a href='#' activeClassName="active" onClick={() => setCen([72.87, 19.07])}>
            Mumbai
          </a>
        </li>
        <li>
          <a href='#' activeClassName="active" onClick={() => setCen([88.361, 22.57])}>
            Kolkata
          </a>
        </li>
        <li>
          <a href='#' activeClassName="active" onClick={() => setCen([77.5946, 12.9716])}>
            Bangalore
          </a>
        </li>
      </ul>
          
          </div>
        )}
        <Nav.Link as={NavLink} to="/slink2" activeClassName="active">
          <CustomIcon /> SLink2
        </Nav.Link>
        <Nav.Link as={NavLink} to="/slink3" activeClassName="active">
          <CustomIcon /> SLink3
        </Nav.Link>
        <Nav.Link as={NavLink} to="/slink4" activeClassName="active">
          <CustomIcon /> SLink4
        </Nav.Link>
      </Nav>
    
    </div>
  );
};

export default Sidebar;

