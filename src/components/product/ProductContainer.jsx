import React from "react";
import { NavLink } from "react-router-dom";

function ProductContainer() {
  return (
    <div>
      <div className="product-container">
        <div className="product-card">
          <div className="img"></div>
          <div className="description">
            <h3 className="des-text">
              This is an amaing book to read. Now only only £5!
            </h3>
          </div>

          <NavLink to="/purchased" className="purchased">
            PAY NOW
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
