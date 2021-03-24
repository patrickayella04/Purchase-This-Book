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
          <div className="background-color">
            <Nav />

            <Author />
            <div className="product-container">
              <div className="product-card">
                {/* <div className="img"></div> */}
                <div className="description">
                  <div className="img"></div>
                  <h3 className="des-text">
                    This is an amazing book to read. Now only £10!
                  </h3>
                </div>

                <button
                  onClick={() => setPurchased(false)}
                  className="purchase"
                >
                  Buy Now
                </button>
              </div>
            </div>

            <Footer />
          </div>
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
