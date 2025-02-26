const { Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');

setDefaultTimeout(30 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  await this.context.clearCookies();
  await this.context.clearPermissions();
  
  try {
    await this.page.evaluate(() => localStorage.clear());
    await this.page.evaluate(() => sessionStorage.clear());
    console.log("Cache, cookies e storage limpos antes do cenário!");
  } catch (error) {
    console.warn("Não foi possível limpar localStorage/sessionStorage nesta página.");
  }
})

After(async function (scenario) {
  const featureName = scenario.gherkinDocument.feature.name.replace(/[^a-zA-Z0-9-_]/g, '_');
  const scenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9-_]/g, '_');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const testResultsDir = 'reports/screenshots';
  const reportDir = 'reports/screenshots';

  if (!fs.existsSync(testResultsDir)) fs.mkdirSync(testResultsDir, { recursive: true });
  if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

  const screenshotPath = `${testResultsDir}/${featureName}_${scenarioName}_${timestamp}.png`;

  if (scenario.result.status === Status.FAILED) {
    try {
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`📸 Screenshot salvo em: ${screenshotPath}`);
    } catch (error) {
      console.warn(`⚠️ Erro ao tirar screenshot: ${error.message}`);
    }

    console.log(`❌ Cenário "${scenarioName}" falhou. Matando o navegador...`);
    try {
      await this.page?.close();
      await this.context?.close();
      await this.browser?.close();
    } catch (error) {
      console.warn(`⚠️ Erro ao fechar navegador: ${error.message}`);
    }

    return; 
  }

  try {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  } catch (error) {
    console.warn(`⚠️ Erro ao fechar navegador: ${error.message}`);
  }
})
