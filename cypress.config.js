const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 960,
  viewportWidth: 1536,
  retries: 1,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
