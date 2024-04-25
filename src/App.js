import { Route, Routes } from "react-router-dom";
import ShoeCart from "./components/ShoeCart";
import Home from "./components/Home";
import Nav from "./Navigation/Nav";

function App() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<ShoeCart />} />
      </Routes>
    </div>
  );
}

export default App;
