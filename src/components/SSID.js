import React, { useState } from 'react';
import GrafanaOnMap from './GrafanaOnMapPopup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function SSID({ data }) {
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
      <p onClick={handleParagraphClick}>SSID </p>
      <p onClick={handleParagraphClick}>Data2</p>
      <p onClick={handleParagraphClick}>Data3</p>
      <p onClick={handleParagraphClick}>Data4</p>
      <p onClick={handleParagraphClick}>Data5</p>

      <GrafanaOnMap show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default SSID;