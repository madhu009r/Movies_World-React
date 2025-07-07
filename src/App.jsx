import { useState } from 'react'
import Navbar from './Component/Navbar';
import Movies from './Component/Movies';
import WatchList from './Component/WatchList';
import Banner from './Component/Banner';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<> <Banner/> <Movies /></>} />
          <Route path='/watchlist' element={<WatchList/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
