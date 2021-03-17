require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const payment = await stripe.paymentIntents.create({
    amount,
    currency: "GBP",
    description: "Shop Books Company",
    payment_method: id,
    confirm: true,
  });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Acess-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({
      clientSecret: payment.client_secret,
    }),
  };
};
