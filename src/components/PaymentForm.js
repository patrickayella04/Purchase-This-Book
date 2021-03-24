import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import Purchased from "./purchased/Purchased";
//import NavContainer from "./navbar/NavContainer";
import Footer from "./footer/Footer";

import "./paymentForm.scss";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Default code will allow for dummy card details to be entered and submited to simulate a payment
    // completion.

    if (selected === false) {
      setSuccess(true);
    } else {
      alert("Please SUBMIT a date!");
    }

    // Connection to Stripe works with below code using local sever. Future goal will be to connect stripe to
    // serverless connection for a production product, so payments can be made remotely.

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    // });

    // if (!error) {
    //   try {
    //     const { id } = paymentMethod;
    //     const response = await axios.post("http://localhost:4000/payment", {
    //       amount: 1000,
    //       id,
    //     });
    //     // const response = await axios.post("./netlify/functions/postPayment", {
    //     //   amount: 1000,
    //     //   id,
    //     // });
    //     if (response.data.success) {
    //       console.log("Successful payment");
    //       setSuccess(true);
    //     }
    //   } catch (error) {
    //     console.log("Error", error);
    //   }
    // } else {
    //   console.log(error.message);
    // }
  };
  const dateSubmit = (e) => {
    e.preventDefault();

    setSelected(!selected);

    const dateValue = document.getElementById("dateValue").value;

    const newDate = dateValue;

    setDate(newDate);

    console.log(date);
  };
  return (
    <>
      {!success ? (
        <div className="form-background">
          <h2 className="transaction-text">
            Enter Card Details &amp; Collection Date - Total: £10
          </h2>
          <div className="date-container">
            <form className="order-date-form" action="submit">
              <input
                className="date-input"
                type="date"
                name=""
                id="dateValue"
              />
              <input
                className="submit-date"
                onClick={dateSubmit}
                type="submit"
                style={{ backgroundColor: !selected ? "green" : "#d35187" }}
              />
            </form>
          </div>

          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <p className="card-disclaimer">card number: repeat 42 </p>
            <button
              onTouchStart={handleSubmit}
              type="submit"
              className="formButton"
            >
              Pay
            </button>
          </form>
          {/* <Footer /> */}
        </div>
      ) : (
        <div>
          <Purchased date={date} />
        </div>
      )}
    </>
  );
}

export default PaymentForm;
