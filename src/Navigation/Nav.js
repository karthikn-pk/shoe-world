import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const cartItems = useSelector((store) => store.cart);

  return (
    <nav className="flex justify-between items-center ml-[50%] ">
      <div className="">
        <h1 className="text-4xl font-serif bg-green-600 p-1 rounded-md">
          Shoe World!!
        </h1>
      </div>

      <div className="flex ml-4 text-3xl ">
        <Link to={"/"}>
          <h1 className="m-3">HOME</h1>
        </Link>
        <button className="m-3 relative">
          <Link to={"/cart"}>
            <FaShoppingCart />
            <span className=" bg-red-500 rounded-lg text-bold text-white ml-4 px-1 absolute top-[-18px] right-[-13px] ">
              {cartItems.length}
            </span>
          </Link>
        </button>
        <button className="m-3">
          <FaRegHeart />
        </button>
        <button className="m-3">
          <RiUserAddFill />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
