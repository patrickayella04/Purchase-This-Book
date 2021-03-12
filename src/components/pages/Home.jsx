import React from "react";
import "../product/product.scss";
import "../navbar/nav.scss";
import "../author/author.scss";
import "../footer/footer.scss";
import "../purchased/purchased.scss";

import Product from "../product/ProductContainer";

function Home() {
  return (
    <div className="main-container">
      <Product />
    </div>
  );
}
export default Home;
