module.exports = {
  routes: [
    {
      method: "GET",
      path: "/search",
      handler: "search.query",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
