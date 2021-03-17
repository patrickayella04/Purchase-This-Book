import React, { useState } from "react";
import Author from "../author/Author";
import StripeContainer from "../StripeContainer";
import Nav from "../navbar/NavContainer";
import Footer from "../footer/Footer";

import "../product/product.scss";

function ProductContainer() {
  const [purchased, setPurchased] = useState(true);

  return (
    <div>
      {purchased ? (
        <>
          <Nav />
          <Author />
          <div className="product-container">
            <div className="product-card">
              <div className="img"></div>
              <div className="description">
                <h3 className="des-text">
                  This is an amazing book to read. Now only only £10!
                </h3>
              </div>

              <button onClick={() => setPurchased(false)} className="purchase">
                PAY NOW
              </button>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Nav />

          <StripeContainer />
        </>
      )}
    </div>
  );
}

export default ProductContainer;
