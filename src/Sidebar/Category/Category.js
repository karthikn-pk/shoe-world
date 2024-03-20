import React from 'react';
import Input from '../../components/Input';

export default function Category({handleChange}) {
  return (
    <div className="flex flex-col w-64 bg-gray-200 p-4"> 
      <h1 className='text-xl font-bold mb-2'>Category</h1>

      <div>
        <label>
          <input onChange={handleChange} type='radio' value="" name='test'/>
          <span> All</span>
        </label>

        
        <Input handleChange={handleChange} value="sneakers" title="sneakers" name="test"/>

        <Input handleChange={handleChange} value="flats" title="flats" name="test"/>

        <Input handleChange={handleChange} value="sandals" title="sandals" name="test"/>

        <Input handleChange={handleChange} value="heels" title="heels" name="test"/>


      </div>
    </div>
  );
}
