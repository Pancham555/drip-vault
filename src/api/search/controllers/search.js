"use strict";

/**
 * A set of functions called "actions" for `search`
 */

module.exports = {
  async query(ctx, next) {
    try {
      const { q } = ctx.query;
      const entries = await strapi.entityService.findMany(
        "api::product.product",
        {
          filters: {
            $or: [
              {
                title: {
                  $containsi: q,
                },
              },
              {
                title: {
                  $startsWith: q,
                },
              },
              {
                title: {
                  $endsWith: q,
                },
              },
              {
                desc: {
                  $containsi: q,
                },
              },
              {
                desc: {
                  $startsWith: q,
                },
              },
              {
                desc: {
                  $endsWith: q,
                },
              },
            ],
          },
          populate: {
            image: true,
          },
        }
      );
      ctx.body = entries;
    } catch (error) {
      ctx.body = { error: error.toString() };
    }
  },
};
