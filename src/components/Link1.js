import React from 'react'
import '../styles/Sizing.css'


const  Processor = () => {
  const embedUrl = 'http://localhost:3000/d-solo/cf5fc6fb-63f5-43a3-9092-ecd5c535777a/new-dashboard?orgId=1&from=1683035593000&to=1683038592000&panelId=2" ';

  return (
    <div style={{ width: '100%', height: '690px' }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        
        title="Embedded Dashboard"
      />
    </div>
  );
};

export default function Link1() {
  return (
    <div className='mainsize'><Processor/></div>
  )
}
