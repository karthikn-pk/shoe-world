import React from 'react'

function Input({handleChange,value,title,name,color}) {
  return (
       <label className='flex items-center mb-2'> 
          
          <span className=' rounded-full' style={{backgroundColor:color}}><input onChange={handleChange} type='radio' value={value} name={name} className='mr-2' /> </span>{title}
        </label>
  );
}
export default Input;
