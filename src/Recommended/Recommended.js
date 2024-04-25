import Buttons from "../components/Buttons";
import { useState } from "react";

function Recommended({ handleClick, handleSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div>
        <div className=" flex ml-[40%] ">
          <input
            type="text"
            className="border border-black p-2 rounded-md"
            placeholder="search your shoes"
            value={searchText}
            onChange={handleInputChange}
          />
          <button
            className="Rbtn ml-4"
            onClick={() => {
              handleSearch(searchText);
            }}>
            Search
          </button>
        </div>
        <h2 className="ml-80 p-4">Recommended</h2>
        <div className="flex ml-80 p-4 ">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />

          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />

          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
}
export default Recommended;
