"use strict";

// /**
//  * order router
//  */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::order.order");
// module.exports = {
//   routes: [
//     {
//       method: "POST",
//       path: "/orders",
//       handler: "order.create",
//       config: {
//         policies: [],
//       },
//     },
//   ],
// };
