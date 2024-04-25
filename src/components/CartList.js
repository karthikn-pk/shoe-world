import React from "react";

const CartList = ({ data }) => {
  return (
    <div>
      <div className="my-4">
        {data.map((item) => (
          <div
            key={item.name}
            className="w-[550px] h-[200px] rounded-md mx-auto flex my-2 bg-green-400 p-4">
            <div className="w-1/2">
              <h1 className="text-3xl">{item.title}</h1>
              <h4 className="text-2xl">$ {item.newPrice}</h4>
            </div>

            <div className="w-1/2">
              {" "}
              <img src={item.img} alt="" className="rounded-md shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
