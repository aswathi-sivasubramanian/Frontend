import React from 'react'
import '../styles/Sizing.css'
import boro from './BoroughNYC.json';
export default function SidebarLink2() {
  // console.log(JSON.stringify(features.features[0]))
  return (
   
    <div className='mainsize'>{JSON.stringify(boro.features[0])}</div>
  )
}
