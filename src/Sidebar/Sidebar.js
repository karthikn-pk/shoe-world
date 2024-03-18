import { FaShoppingCart } from "react-icons/fa";
import Price from "./Price/Price";
import Category from "./Category/Category";
import Color from "./Color/Color";

export default function Sidebar() {
  return (
    <>
    <section className="sidebar flex w-1/6 fixed h-full border-r-2 border-solid border-black z-3  items-center">
        <div className="logo-container mb-16">
            <h1 className="mt-6"><FaShoppingCart/></h1>
        </div>
        <Category/>
        <Price/>
        <Color/>

    </section>
    </>
    
  )
}
