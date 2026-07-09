const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://automationpratice.com.br'
      // implement node event listeners here
    },
  },
});
