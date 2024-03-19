import React from 'react';
import Input from '../../components/Input';

export default function Category() {
  return (
    <div className="flex flex-col w-64 bg-gray-200 p-4"> 
      <h1 className='text-xl font-bold mb-2'>Category</h1>

      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
    </div>
  );
}
