import Input from "../../components/Input"
export default function Price({handleChange}) {
  return (
    <div className="flex flex-col w-64 bg-gray-200 p-4"> 
      <h1 className='text-xl font-bold mb-2'>Price</h1>
      <label>
          <input onChange={handleChange} type='radio' value="" name='test2'/>
          <span> All</span>
        </label>

        <Input handleChange={handleChange} value={50} title="$0 - 50" name="test2"/>

        <Input handleChange={handleChange} value={100} title="$50 - 100" name="test2"/>

        <Input handleChange={handleChange} value={150} title="$100 - 150" name="test2"/>

        <Input handleChange={handleChange} value={200} title="over $150" name="test2"/>


     
    </div>
  )
}
