import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';






function Nav({handleSearch}) {

  const [searchText,setSearchText]=useState("");

  const handleInputChange=(e)=>{
    setSearchText(e.target.value)
  }
  
  return (
    
    <nav className='flex justify-around items-center ml-1/6 '>
      
      
      <div className=' px-3 py-2 m-3 mr-5 '>
        <input type='text' className='border border-black p-2 rounded-md' placeholder='search your shoes' value={searchText} onChange={handleInputChange}/>
        <button className='Rbtn ml-4' onClick={()=>{handleSearch(searchText)}}>Search</button>
      </div>
      <div className='flex ml-4'>
        <a href='#' className='m-3 '><FaShoppingCart/></a>
        <a href='#' className='m-3'><FaRegHeart/></a>
        <a href='#' className='m-3'><RiUserAddFill/></a>
        
      </div>

     
    </nav>
  )
}

export default Nav;
