import React from 'react'

export default function Category() {
  return (
    <div>
        <h1 className='text-xl font-bold mb-5'>Category</h1>

        <div className='block relative pl-5'>
            <label>
                <input type='radio' name='test' />
                <span></span> All
            </label>
        

     
            <label>
                <input type='radio' name='test' />
                <span></span> Sneakers
            </label>
     

       
            <label>
                <input type='radio' name='test' />
                <span></span> Flats
            </label>

            <label>
                <input type='radio' name='test' />
                <span></span> Sandals
            </label>

            <label>
                <input type='radio' name='test' />
                <span></span> Heels
            </label>
        </div>


    </div>
  )
}
