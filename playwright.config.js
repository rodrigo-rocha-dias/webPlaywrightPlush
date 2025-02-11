const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features',
  testMatch: ['**/*.feature'],
  use: {
    baseURL: 'https://demo.spreecommerce.org',
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]], // Adiciona o relatório HTML
});
