const { Given, When, And, Then } = require('@cucumber/cucumber');
const SwagLabsPage = require('../pages/swagLabsPage');
const { expect } = require('@playwright/test');

Given('que acesso a pagina inicial do swag labs', async function () {
  this.SwagLabsPage = new SwagLabsPage(this.page);
  await this.SwagLabsPage.visitarPagina();
})

When('autenticar com o usuario {string}', async function (username) {
  this.SwagLabsPage = new SwagLabsPage(this.page);
  await this.SwagLabsPage.login(username);
})

When('deve carregar tela home {string}', async function (headerTela) {
  await expect(this.page.getByText('Swag Labs')).toBeVisible();
})

When('selecionar itens para colocar no carrinho', async function () {
  this.SwagLabsPage = new SwagLabsPage(this.page);
  await this.SwagLabsPage.selecionarItens();
})

When('confirmar o item que foi adicionado no carrinho e clicar em Checkout', async function () {
  this.SwagLabsPage = new SwagLabsPage(this.page);
  await this.SwagLabsPage.confirmarItemAdicionado();
})

When('preencher os campos de informacoes de cobranca', async function () {
  this.SwagLabsPage = new SwagLabsPage(this.page);
  await this.SwagLabsPage.preencherCamposInformacoesCobranca();
})

When('sera feito compra com sucesso', async function () {
  await expect(this.page.locator('[data-test="complete-header"]')).toBeVisible();
})