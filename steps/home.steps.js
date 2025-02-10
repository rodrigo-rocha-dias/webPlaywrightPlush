const { Given, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/homePage');
const { expect } = require('@playwright/test');

Given('que acesso a pagina inicial da plush', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.visitarPagina();
})

Then('o titulo da pagina deve ser {string}', async function (nomeTela) {
  await expect(this.page.getByLabel('Top').getByRole('link', { name: nomeTela })).toBeVisible();
})

