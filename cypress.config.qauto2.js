const baseConfig = require("./cypress.config");

module.exports = {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: "https://qauto2.forstudy.space",
  },
  env: {
    userEmail: "qa.qauto2.20261108@example.com",
    userPassword: "Password123",
  },
};
