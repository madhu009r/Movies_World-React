import { useState } from 'react'
import Navbar from './Component/Navbar';
import Movies from './Component/Movies';
import WatchList from './Component/WatchList';
import Banner from './Component/Banner';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  let [watchList, setWatchList] = useState([]);

  let handleAddtoWatchList =(moviesObject)=>{

    let newWatchList =[...watchList, moviesObject];
    setWatchList(newWatchList);
    console.log(newWatchList);
  }

  let handleRemoveFromWatchList = (movieObject) => {
    let filteredWatchList = watchList.filter((movie) => movie.id != movieObject.id);
    setWatchList(filteredWatchList);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<> <Banner/> <Movies handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/></>} />
          <Route path='/watchlist' element={<WatchList/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
