const { expect } = require('@playwright/test');

class UtilPage {
  constructor(page) {
    this.page = page;
  }

  async clicarBotao(nomeBotao) {
    await this.page.getByRole('button', { name: nomeBotao }).click();
  }

  async clicarLink(nomeLink) {
    await this.page.getByRole('link', { name: nomeLink }).click();
  }

  async selecionarProdutoHome() {
    await this.page.getByRole('link', { name: 'RESURFACE SCRUB // FACE +' }).click();
  }

  async selecionarQuantidadeDesejada() {
    await this.page.locator('form').filter({ hasText: 'Quantity Add To Cart Add To' }).getByRole('button').nth(1).click();
  }

  async preencherCamposInformacoesCobranca() {
    await this.page.getByRole('textbox', { name: 'Email' }).fill('rodrigo.dias@teste.com');
    await this.page.getByRole('textbox', { name: 'First name' }).fill('Rodrigo ');
    await this.page.getByRole('textbox', { name: 'Last name' }).fill('Dias');
    await this.page.getByRole('textbox', { name: 'Street and house number' }).fill('Avenue U, Brooklyn, NY, EUA');
    await this.page.getByRole('option', { name: 'Avenue U, Brooklyn, NY, EUA' }).click();
    await this.page.getByRole('textbox', { name: 'Postal Code' }).fill('12345');
    await this.page.getByRole('textbox', { name: 'Phone (optional)' }).fill('11993380001');
    await this.page.getByRole('button', { name: 'Save and Continue' }).click();
  }

  async selecionarMetodoEntrega() {
    await this.page.getByRole('radio', { name: 'Free Domestic Shipping' }).check();
  }

  async preencherCamposInformacoesPagamento() {
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByTestId('card').click();
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Número do cartão' }).fill('2223003122003222');
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Data de validade MM / AA' }).fill('01 / 29');
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Código de segurança' }).fill('587');
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'E-mail' }).fill('rodrigo.dias@testes.com');
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Mobile number' }).fill('(11) 99338-0001');
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Full name' }).fill('Rodrigo Dias');
    await this.page.getByRole('button', { name: 'Pay Now' }).click();
  }


}

module.exports = UtilPage;
