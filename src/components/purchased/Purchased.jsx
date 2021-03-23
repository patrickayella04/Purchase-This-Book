import React from "react";

function Purchased(props) {
  const date = props.date;
  return (
    <div>
      <div className="purchased-container">
        <h1 className="complettion-purchase">
          {" "}
          <i>Thank you for your purchase!</i>{" "}
        </h1>
        <br />
        <h2 className="delivery">
          Your product will be ready for your collection at 456 Sunny Hill,
          California, 23484 on... {date}
        </h2>
      </div>
    </div>
  );
}

export default Purchased;
