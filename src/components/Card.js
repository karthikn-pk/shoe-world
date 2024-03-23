import React from 'react';
import { FaShoppingBag } from "react-icons/fa";

function Card({img,title,star,reviews,newPrice,prevPrice}) {
  return (
    <div style={{ width: '300px', height: '400px' }}>

<section className='m-5 p-5 cursor-pointer border border-solid border-black'>
            <img className='w-full h-52 mb-4 object-contain' src={img} alt={title} />

        
        <div>
            <h3 className='mb-4 font-bold text-xl'>{title}</h3>
            <section className='flex'>
                {star} {star} {star} {star}
                <span className='font-bold ml-3'>4</span> <span>{reviews}</span>
            </section>
        <section className='flex justify-around items-center'>

        <div>
            <del>{prevPrice}</del> $ {newPrice}

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
