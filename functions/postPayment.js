import strp from "@stripe/stripe-js";

const stripe = strlp.require("stripe")(process.env.STRIPE_SECRET_TEST);

exports.handler = async (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return callback(null, { statusCode: 405, body: "Method Not Allowed" });
  }

  const data = JSON.parse(event.body);

  if (!data.token || parseInt(data.amount) < 1) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: "Some required fields were not supplied.",
      }),
    });
  }

  stripe.paymentIntents
    .create({
      amount,
      currency: "GBP",
      description: "Shop Books Company",
      payment_method: id,
      confirm: true,
    })
    .then(({ status }) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ status }),
      });
    })
    .catch((err) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          message: `Error: ${err.message}`,
        }),
      });
    });

  //   const data = JSON.parse(event.body);
  //   const payment = await stripe.paymentIntents.create({
  //     amount,
  //     currency: "GBP",
  //     description: "Shop Books Company",
  //     payment_method: id,
  //     confirm: true,
  //   });
  //   return {
  //     statusCode: 200,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Acess-Control-Allow-Headers": "Content-Type",
  //     },
  //     body: JSON.stringify({
  //       clientSecret: payment.client_secret,
  //     }),
  //   };
};
