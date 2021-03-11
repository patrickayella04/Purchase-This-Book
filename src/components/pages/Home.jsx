import React from "react";
import "../product/product.scss";
import "../navbar/nav.scss";
import "../author/author.scss";
import "../footer/footer.scss";
import "../purchased/purchased.scss";

import Nav from "../navbar/NavContainer";
import Product from "../product/ProductContainer";
import Author from "../author/Author";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="main-container">
      <Nav />
      <Product />
      <Author />
      <Footer />
    </div>
  );
}
export default Home;
