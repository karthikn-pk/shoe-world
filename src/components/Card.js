import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

function Card() {
  return (
    <div>

<section className='m-5 p-5 cursor-pointer border border-solid border-black'>
            <img className='w-52 mb-4' src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt="shoee" />

        
        <div>
            <h3 className='mb-4'>Shoe</h3>
            <section className='flex'>
                <FaStar className='text-yellow-300'/> <FaStar className='text-yellow-300'/> <FaStar className='text-yellow-300'/> <FaStar className='text-yellow-300'/>
                <span className='font-bold ml-3'>4</span>
            </section>
        <section className='flex justify-around items-center'>

        <div>
            <del>$300</del> 200

            </div>
            <div>
            <FaShoppingBag/>

        </div>
        </section>
         
 
    </div>
    </section>
    </div>
  )
}
export default Card;
