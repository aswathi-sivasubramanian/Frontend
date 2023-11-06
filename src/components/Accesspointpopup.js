import React, { useState } from 'react';
import GrafanaOnMap from './GrafanaOnMapPopup';
import "../styles/Map.css"
function Accesspointpopup({ data ,selected,setSelected}) {
  
  const [showModal, setShowModal] = useState(false);
  const handleParagraphClick = () => {
    setShowModal(true);
  };
  // "ap_id": 1,
  // "borough": "QU",
  // "location": "41st Ave, Queens, NY 11101, USA",
  // "status
  return (
    <div className='popupdiv'>
      
      <img
        width="200px"
        height="200px"
        src="https://cdn0.centrecom.com.au/images/upload/0144368_0.jpeg"
        alt='routerimage'
      ></img>
      {selected === 'AP' &&
      <div><p onClick={handleParagraphClick}>Accesspoint ID:{data.ap_id}</p>
  
      <p><a onClick={()=>{setSelected("Interface")}}>Interface</a></p>
      <p>{data.borough}</p>
      <p>Status:{data.status}</p>
      <p>Location:{data.location}</p>

      </div>
      }
        {selected === 'Interface' &&
        <div>
          <p onClick={handleParagraphClick}>Interface vis</p>
          <p><a onClick={()=>{setSelected("SSID")}}>SSID</a></p>
        </div>
      }
      {selected === 'SSID' &&
      <p onClick={handleParagraphClick}>SSID</p>
      
      }

      <GrafanaOnMap show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default Accesspointpopup;