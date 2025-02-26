const { faker } = require('@faker-js/faker');

class SwagLabsPage {
  constructor(page) {
    this.page = page;
  }

  async visitarPagina() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username) {
    await this.page.locator('[data-test="password"]').fill(username);
    await this.page.locator('[data-test="username"]').fill('standard_user');
    await this.page.locator('[data-test="login-button"]').click();
  }

  async validarHeader() {
    await this.page.fill('input[id="user-name"]', 'standard_user');
    await this.page.fill('input[id="password"]', 'secret_sauce');
  }

  async selecionarItens() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  async confirmarItemAdicionado() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
    await this.page.locator('[data-test="checkout"]').click();
  }

  async preencherCamposInformacoesCobranca() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.location.zipCode();
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
    await this.page.locator('[data-test="finish"]').click();
  }

}

module.exports = SwagLabsPage;
