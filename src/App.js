import React from "react";
import ReactDOM from "react-dom";
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
