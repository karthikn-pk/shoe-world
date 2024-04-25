import React from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";

const ShoeCart = () => {
  const cartItems = useSelector((store) => store.cart);
  console.log(cartItems);
  return (
    <div className="w-[750px] mx-auto">
      <h1 className="text-5xl text-bold text-center p-8">Your Shoe Cart!</h1>
      <div>
        <CartList data={cartItems} />
      </div>
      <div className="bg-[#3ebb53] p-4 rounded-lg flex justify-evenly font-bold font mb-4">
        <h1 className="text-2xl  ">Total Amount </h1>
        <h1 className="text-2xl">
          $
          {cartItems.reduce((acc, item) => {
            let price = Number(item?.newPrice);
            acc = acc + price;
            return acc;
          }, 0)}
        </h1>
      </div>
    </div>
  );
};

export default ShoeCart;
