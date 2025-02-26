const { Given, When, And, Then } = require('@cucumber/cucumber');
const UtilPage = require('../pages/utilPage');
const ProductsPage = require('../pages/productsPage')
const CheckOutPage = require('../pages/checkOutPage')
const HomePage = require('../pages/homePage')

Given('selecionar um produto', async function () {
  this.HomePage = new HomePage(this.page);
  await this.HomePage.selecionarProdutoHome();
})

When('selecionar a quantidade desejada e adicionar no carrinho', async function () {
  this.UtilPage = new UtilPage(this.page);
  this.ProductsPage = new ProductsPage(this.page)
  await this.ProductsPage.selecionarQuantidadeDesejada();
  await this.UtilPage.clicarBotao('Add To Cart');
})

When('confirmar o item que foi adicionado no carrinho e clicar em Checkout', async function () {
  this.UtilPage = new UtilPage(this.page);
  await this.UtilPage.clicarLink('Checkout');
})

When('preencher os campos de informacoes de cobranca', async function () {
  this.CheckOutPage = new CheckOutPage(this.page);
  await this.CheckOutPage.preencherCamposInformacoesCobranca();
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