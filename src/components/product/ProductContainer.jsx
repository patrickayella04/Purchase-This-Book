import React from "react";

function ProductContainer() {
  return (
    <div>
      <div className="product-container">
        <div className="product-card">
          <div className="img"></div>
          <div className="description">
            <p className="des-text">
              This is an amaing book to reade. You should buy it for only £5!
            </p>
          </div>
          <button className="purchase">PAY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
