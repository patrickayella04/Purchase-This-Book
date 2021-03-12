import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51ITsQDI8v0AggZNQjipVevZ9JXlMLhBtMcSOkaRg7pfDIIPRN0inAOqeOLCwm3A4gplfmkMBTAiDiNhGKedbImux00xilFkeYM";

const stripePromise = loadStripe(PUBLIC_KEY); // Loads our stripe for action

function StripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

export default StripeContainer;
