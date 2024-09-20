import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Base URL for Suite Portal application
    baseUrl: 'http://localhost:4200',
    // Setup for video recording
    video: true,
    // Setup for screenshots
    screenshotOnRunFailure: true,
    specPattern: 'cypress/e2e/*.spec.ts', 
  }  
});
