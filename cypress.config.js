const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild.js');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qademo.onebrick.io',
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: '**/*.feature',
    screenshotOnRunFailure: false,
    video: false,
    chromeWebSecurity: false,
    setupNodeEvents,
  },
});
