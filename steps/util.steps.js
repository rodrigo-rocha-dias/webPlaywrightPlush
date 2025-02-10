const { Given, When, And, Then } = require('@cucumber/cucumber');
const UtilPage = require('../pages/utilPage');

Given('selecionar um produto', async function () {
  this.UtilPage = new UtilPage(this.page);
  await this.UtilPage.selecionarProdutoHome();
})

When('selecionar a quantidade desejada e adicionar no carrinho', async function () {
  this.UtilPage = new UtilPage(this.page);
  await this.UtilPage.selecionarQuantidadeDesejada();
  await this.UtilPage.clicarBotao('Add To Cart');
})

When('confirmar o item que foi adicionado no carrinho e clicar em Checkout', async function () {
  this.UtilPage = new UtilPage(this.page);
  await this.UtilPage.clicarLink('Checkout');
})

When('preencher os campos de informacoes de cobranca', async function () {
  this.UtilPage = new UtilPage(this.page);
  await this.UtilPage.preencherCamposInformacoesCobranca();
})

When('selecionar metodo de entrega', async function () {
  this.UtilPage = new UtilPage(this.page);
  await this.UtilPage.selecionarMetodoEntrega();
})

When('preencher os campos de informacoes de pagamento', async function () {
  this.UtilPage = new UtilPage(this.page);
  await this.UtilPage.preencherCamposInformacoesPagamento();
})

When('sera feita compra exibindo mensagem de sucesso', async function () {

})