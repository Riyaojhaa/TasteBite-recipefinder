import React, { useState } from "react";
import Allfood from "./Allfoodpages/Allfood";
import Jokes from "./Jokes/Jokes"
import { useNavigate } from 'react-router-dom';
import SweetTooth from "./SweetToothpages/SweetTooth"
import PopularCat from "./PopularCategories/PopularCat"
import bg1 from "../Images/bg2.jpg";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "550px",
    width: "100%",
    position: "relative",
    opacity: "0.8",
  };
  
  const [searchText , setSearchText] = useState('')
  const navigate = useNavigate()

  const handlesearch = (event) => {
    event.preventDefault()
    if (searchText.trim()) {
      navigate(`/search/${searchText}`);
    }
    else {
      alert('write your Item first :(')
    }
  }

  return (
    <div>
      <div style={backgroundStyle} className="mb-4">
        <form onSubmit={handlesearch}  id="searchForm" className="d-flex justify-content-center mt-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
          
          className="btn btn-outline-success" 
          type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Delicious food section */}
      <div className="mt-2">
      <Allfood />
      </div>
      

      {/* Popular Categories section */}
      <div className="mt-4 ">
      <PopularCat />
      </div> 

      {/* sweets food section */}
       <div className="mt-4">
       <SweetTooth /> 
       </div>

       {/* blogs starts here */}
       <div id="jokes" className="mt-4">
       <Jokes />
       </div>
       
       
    </div>
  );
}
