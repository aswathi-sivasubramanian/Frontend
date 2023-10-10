import React,{useState} from 'react';
import Navbarmain from './components/Navbarmain';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Openmynz from './components/Openmynz';
import Link1 from './components/Link1';
import Link2 from './components/Link2';
import Link3 from './components/Link3';
import SidebarLink1 from './components/SidebarLink1';
import SidebarLink2 from './components/SidebarLink2';
import SidebarLink3 from './components/SidebarLink3';
import SidebarLink4 from './components/SidebarLink4';
import "./App.css"
function App() {
  const [cen,setCen] = useState([ -73.5763 ,40.5465]);
 
  return (
    <>
    <BrowserRouter>
 <Navbarmain/>
 <Sidebar cen={cen} setCen={setCen} />

 <Routes>
  <Route path='/link1' element={<Link1/>}/>
  <Route path='/link2' element={<Link2/>}/>
  <Route path='/link3' element={<Link3/>}/>
  <Route path='/openmynz' element={<Openmynz/>}/>
  <Route path='/slink1' element={<SidebarLink1 cen={cen} setCen={setCen}/>}/>
  <Route path='slink2' element={<SidebarLink2/>}/>
  <Route path='/slink3' element={<SidebarLink3/>}/>
  <Route path='/slink4' element={<SidebarLink4/>}/>
 </Routes>
 </BrowserRouter>
    </>
  );
}

export default App;
