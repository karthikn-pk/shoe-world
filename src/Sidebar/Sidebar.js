import { FaShoppingCart } from "react-icons/fa";
import Price from "./Price/Price";
import Category from "./Category/Category";
import Color from "./Color/Color";

export default function Sidebar() {
  return (
    <>
    <section className=" flex flex-col w-3/20 h-full absolute left-0 top-0 z-3 items-center border border-solid border-gray-500 ">
        <div className="mb-5">
            <h1 className="mt-6"><FaShoppingCart/></h1>
        </div>
        <Category/>
        <Price/>
        <Color/>

    </section>
    </>
    
  )
}
