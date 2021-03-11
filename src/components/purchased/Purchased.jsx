import React from "react";

function Purchased() {
  const date = "04/03/2021";
  return (
    <div>
      <div className="purchased-container">
        <h1 className="complettion-purchase">Thank you for your purchase!</h1>
        <p className="delivery">Your product will be with you on...{date}</p>
      </div>
    </div>
  );
}

export default Purchased;
