"use strict";

/**
 * A set of functions called "actions" for `razorpay`
 */

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_APIKEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

module.exports = {
  createOrder: async (ctx) => {
    // const { amount, currency, receipt, address, products, city, email, phone } =
    //   ctx.request.body;
    const {
      email,
      first_name,
      last_name,
      address,
      apartment,
      zipcode,
      city,
      state,
      phone,
      totalitemsprice,
      deliveryprice,
      amount,
      currency,
      receipt,
      products,
    } = ctx.request.body;
    try {
      const result = await razorpay.orders.create({
        amount: amount * 100, // amount in the smallest currency unit
        currency,
        receipt,
        // notes: { ...products },
      });

      const entity = await strapi.service("api::order.order").create({
        data: {
          order_details: {
            ...result,
            email,
            first_name,
            last_name,
            address,
            apartment,
            zipcode,
            city,
            state,
            phone,
            totalitemsprice,
            deliveryprice,
            products,
          },
        },
        published: true,
      });
      ctx.body = { res: entity };
    } catch (error) {
      ctx.body = { res: "error" };
      console.log(error);
    }
  },
  payment: async (ctx) => {
    const { id, razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      ctx.request.body;
    try {
      const entity = await strapi.service("api::order.order").update(id, {
        data: {
          payment_details: {
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
          },
        },
        published: true,
      });
      ctx.body = { res: entity };
    } catch (error) {
      ctx.body = { res: "error" };
      console.log(error);
    }
  },
};
