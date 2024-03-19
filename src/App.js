import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data"


function App() {

  const [selectedCategory,setSelectedCategory]=useState(null);

///Search filter
  const [searchText,setSearchText]=useState("");

  const handleInputChange=(e)=>{
    setSearchText(e.target.value)
  }

  const filteredItems=products.filter((product)=>product.title.toLowerCase().indexOf(searchText.toLowerCase()!==-1));

//Radio btn filter//

const handleChange=(e)=>{
  selectedCategory(e.target.value);
}

//button filter//
 


  return (
    <div className="overflow-hidden">
    
   <Nav/>
   <Sidebar/>
   <Recommended/>
   <Products/>
   
   
    </div>
   
  );
}

export default App;
