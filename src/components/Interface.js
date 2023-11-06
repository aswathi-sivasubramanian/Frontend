import React, { useState } from 'react';
import GrafanaOnMap from './GrafanaOnMapPopup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Interface({ data }) {
  const [showModal, setShowModal] = useState(false);

  const handleParagraphClick = () => {
    setShowModal(true);
  };

  return (
    <div className='popupdiv'>
      <Breadcrumb data-bs-theme="dark" className='breadcrumb'>
  <Breadcrumb.Item href="#" active>AP</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Interface</Breadcrumb.Item>
  <Breadcrumb.Item href="#">SSID</Breadcrumb.Item>
</Breadcrumb>
      <img
        width="200px"
        height="200px"
        src="https://cdn0.centrecom.com.au/images/upload/0144368_0.jpeg"
        alt='routerimage'
      ></img>
      <p onClick={handleParagraphClick}>Interface</p>
      <p onClick={handleParagraphClick}>I Data2</p>
      <p onClick={handleParagraphClick}>I Data3</p>
      <p onClick={handleParagraphClick}>I Data4</p>
      <p onClick={handleParagraphClick}>I Data5</p>

      <GrafanaOnMap show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default Interface;