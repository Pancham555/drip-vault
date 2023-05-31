module.exports = {
  routes: [
    {
      method: "POST",
      path: "/razorpay",
      handler: "razorpay.createOrder",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/razorpay",
      handler: "razorpay.payment",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
