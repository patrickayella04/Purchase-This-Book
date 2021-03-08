import React from "react";
import "./components/product/product.scss";
import "./components/navbar/nav.scss";

import "./App.css";
import Nav from "./components/navbar/NavContainer";
import Product from "./components/product/ProductContainer";

function App() {
  return (
    <>
      <div className="main-container">
        <Nav />
        <Product />
      </div>
    </>
  );
}

export default App;
