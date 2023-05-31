"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order");
// module.exports = {
//   async create(ctx) {
//     try {
//       // Retrieve the necessary data from the request body
//       const { orderId, amount, customerName, orderDetails } = ctx.request.body;
//       // Create the order in the database
//       const order = await strapi.services.orders.create({
//         orderId,
//         amount,
//         customerName,
//         orderDetails,
//         // Add other properties as needed
//       });
//       // Return the newly created order
//       return order;
//     } catch (err) {
//       console.error("Error creating order:", err);
//       throw new Error("Failed to create order.");
//     }
//   },
//   // create: async (ctx) => {
//   //   // Access the razorpay service
//   //   const { razorpay } = strapi.plugins["strapi-plugin-razorpay"].services;
//   //   try {
//   //     // Create an order
//   //     const order = await razorpay.createOrder({
//   //       amount: 1000, // Amount in paise (e.g., 1000 paise = ₹10)
//   //       currency: "INR", // Currency code
//   //       receipt: "order_123", // Unique receipt identifier
//   //       notes: {
//   //         description: "Test Order",
//   //       },
//   //     });
//   //     // Get the payment link from the order response
//   //     const paymentLink = order?.short_url;
//   //     // Send the payment link in the response
//   //     ctx.send({ paymentLink });
//   //   } catch (err) {
//   //     // Handle error
//   //     ctx.send({ error: "Failed to create order" });
//   //   }
//   // },
// };

// const { createCoreController } = require("@strapi/strapi").factories;
// const rzp = require("razorpay");
// const instance = new rzp({
//   key_id: process.env.RAZORPAY_APIKEY,
//   key_secret: process.env.RAZORPAY_SECRET,
// });
// // module.exports = createCoreController('api::order.order')
// module.exports = createCoreController("api::order.order", ({ strapi }) => ({
//   async create(ctx) {
//     const { amount, address, city, email } = ctx.request.body.data;
//     const options = {
//       amount: amount * 100, // amount in the smallest currency unit i.e. paisa
//       currency: "INR",
//       receipt: email,
//     };
//     try {
//       const product = await instance.orders.create(options);
//       const entity = await strapi.service("api::order.order").create({
//         order_details: {
//           amount,
//           address,
//           product,
//           city,
//           email,
//         },
//       });
//       const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
//       return await this.transformResponse(sanitizedEntity);
//     } catch (error) {
//       console.log(error);
//       ctx.response.status = 500;
//       return { error: { message: "There was a problem creating the charge" } };
//     }
//   },
//   async find(ctx) {
//     // some custom logic here
//     ctx.query = { ...ctx.query, local: "en" };
//     // Calling the default core action
//     const { data, meta } = await super.find(ctx);

//     // some more custom logic
//     meta.date = Date.now();

//     return { data, meta };
//   },
//   async findOne(ctx) {
//     const { id } = ctx.params;
//     const { query } = ctx;

//     const entity = await strapi
//       .service("api::product.product")
//       .findOne(id, query);
//     const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

//     return this.transformResponse(sanitizedEntity);
//   },
// }));
