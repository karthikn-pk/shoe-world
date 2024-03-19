import Input from "../../components/Input"
export default function Color() {
  return (
    <div className="flex flex-col w-64 bg-gray-200 p-4"> 
      <h1 className='text-xl font-bold mb-2'>Color</h1>

      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
    </div>
  )
}
