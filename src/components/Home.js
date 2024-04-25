import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Recommended from "../Recommended/Recommended";
import Products from "../Products/Products";
import products from "../db/data";
import { useState } from "react";
import Card from "./Card";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  ///Search filter
  const [searchText, setSearchText] = useState("");

  // const handleInputChange=(e)=>{
  //   setSearchText(e.target.value)
  // }

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  //Radio btn filter//

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //button filter//
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  //
  function filteredData(products, selected, searchText) {
    let filteredProducts = products;
    console.log(selected);
    //filtered input
    if (searchText) {
      filteredProducts = filteredItems;
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, searchText);
  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} handleSearch={handleSearch} />
      <Products result={result} />
    </div>
  );
};

export default Home;
