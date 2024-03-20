import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data"
import Card from "./components/Card";


function App() {

  const [selectedCategory,setSelectedCategory]=useState(null);

///Search filter
  const [searchText,setSearchText]=useState("");

  const handleInputChange=(e)=>{
    setSearchText(e.target.value)
  }

  const filteredItems=products.filter((product)=>product.title.toLowerCase().indexOf(searchText.toLowerCase())!==-1);

//Radio btn filter//

const handleChange=(e)=>{
  setSelectedCategory(e.target.value);
}

//button filter//
 const handleClick=(e)=>{
  setSelectedCategory(e.target.value);
 }

 //
 function filteredData(products,selected,searchText){
  let filteredProducts=products;

  //filtered input
  if(searchText){
    filteredProducts=filteredItems
  }

  //selected filter
  if(selected){
    filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title})=>
      category===selected || color===selected || company===selected || newPrice ===selected || title===selected
    );
  }
return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(
  <Card key={Math.random()} img={img} title={title} star={star} reviews={reviews} newPrice={newPrice} prevPrice={prevPrice}/>
));

 }

 const result=filteredData(products,selectedCategory,searchText);

  return (
    <div className="overflow-hidden">
    
   <Nav searchText={searchText} handleInputChange={handleInputChange}/>
   <Sidebar handleChange={handleChange}/>
   <Recommended handleClick={handleClick}/>
   <Products result={result}/>
   
   
    </div>
   
  );
}

export default App;
