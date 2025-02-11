const { Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');

setDefaultTimeout(30 * 1000); // Aumentado para 30 segundos

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  const scenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9-_]/g, '_');
  const testResultsDir = 'test-results';
  const reportDir = 'reports/screenshots';

  if (!fs.existsSync(testResultsDir)) fs.mkdirSync(testResultsDir, { recursive: true });
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  if (scenario.result.status === Status.FAILED) {
    await this.page.screenshot({ path: `${testResultsDir}/${scenarioName}.png`, fullPage: true });
    console.log(`Screenshot salvo em ${testResultsDir}/${scenarioName}.png`);
  }

  if (this.page) {
    try {
      await this.page.screenshot({ path: `${reportDir}/${scenarioName}.png` });
    } catch (error) {
      console.warn(`Erro ao tirar screenshot: ${error.message}`);
    }
  }

  try {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  } catch (error) {
    console.warn(`Erro ao fechar navegador: ${error.message}`);
  }
});
