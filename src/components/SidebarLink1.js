import React from 'react'
import Map from './Map'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function SidebarLink1({cen,setCen}) {
  return (
    
    <>

       <Map cen={cen} setCen={setCen}/>


  
    </>
  )
}
