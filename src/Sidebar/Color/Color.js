import Input from "../../components/Input"
export default function Color({handleChange}) {
  return (
    <div className="flex flex-col w-64 bg-gray-200 p-4"> 
      <h1 className='text-xl font-bold mb-2'>Color</h1>

      <label>
          <input onChange={handleChange} type='radio' value="" name='test1'/>
          <span> All</span>
        </label>

        <Input handleChange={handleChange} value="black" title="Black" color="black" name="test1"/>
        <Input handleChange={handleChange} value="blue" title="Blue" color="blue" name="test1"/>

        <Input handleChange={handleChange} value="red" title="Red" color="red" name="test1"/>

        <Input handleChange={handleChange} value="green" title="Green" color="green" name="test1"/>

        <Input handleChange={handleChange} value="white" title="White" color="white" name="test1"/>


      
    </div>
  )
}
