import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
// import { GiRunningShoe } from "react-icons/gi";





function Nav() {
  return (
    
    <nav className='flex justify-around items-center ml-1/6 '>
      {/* <div className='text-4xl'>
      <GiRunningShoe/>
      </div> */}
      
      <div className=' px-3 py-2 m-3 mr-5 '>
        <input type='text' className='border border-black p-2 rounded-md' placeholder='search your shoes'/>
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
