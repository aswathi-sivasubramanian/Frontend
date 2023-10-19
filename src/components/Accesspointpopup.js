import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GrafanaOnMap from './GrafanaOnMapPopup';
function Accesspointpopup({ data }) {
  const [showModal, setShowModal] = useState(false);

  const handleParagraphClick = () => {
    setShowModal(true);
  };

  return (
    <div className='popupdiv'>
      <img
        width="200px"
        height="200px"
        src="https://cdn0.centrecom.com.au/images/upload/0144368_0.jpeg"
        alt='routerimage'
      ></img>
      <p onClick={handleParagraphClick}>Temperature</p>
      <p onClick={handleParagraphClick}>Attribute2</p>
      <p onClick={handleParagraphClick}>Attribute3</p>
      <p onClick={handleParagraphClick}>Attribute4</p>
      <p onClick={handleParagraphClick}>Attribute5</p>

      <GrafanaOnMap show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default Accesspointpopup;