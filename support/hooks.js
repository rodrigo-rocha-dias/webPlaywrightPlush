const { Before, After, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');

setDefaultTimeout(15 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: false, slowMo: 100 });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const dir = 'test-results';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    await this.page.screenshot({ path: `test-results/${scenario.pickle.name}.png`, fullPage: true });
    console.log(`Screenshot salvo em test-results/${scenario.pickle.name}.png`);
  }

  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
