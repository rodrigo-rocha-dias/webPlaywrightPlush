const { faker } = require('@faker-js/faker');

class CheckOutPage {
  constructor(page) {
    this.page = page;
  }

  async preencherCamposInformacoesCobranca() {
    const email = faker.internet.email();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const street = faker.location.streetAddress();
    const postalCode = faker.location.zipCode();
    const phone = faker.phone.number('+55 11 9####-####');

    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await this.page.getByRole('textbox', { name: 'First name' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last name' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'Street and house number' }).fill(street);
    await this.page.getByRole('option', { name: street }).click();
    await this.page.getByRole('textbox', { name: 'Postal Code' }).fill(postalCode);
    await this.page.getByRole('textbox', { name: 'Phone (optional)' }).fill(phone);
    await this.page.getByRole('button', { name: 'Save and Continue' }).click();
  }

  async selecionarMetodoEntrega() {
    await this.page.getByRole('radio', { name: 'Free Domestic Shipping' }).check();
  }

  async preencherCamposInformacoesPagamento() {
    const email = faker.internet.email();
    const phone = faker.phone.number('+55 11 9####-####');
    const fullName = `${faker.person.firstName()} ${faker.person.lastName()}`;

    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByTestId('card').click();
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Número do cartão' }).fill('2223003122003222');
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Data de validade MM / AA' }).fill('01 / 29');
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Código de segurança' }).fill('587');
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'E-mail' }).fill(email);
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Mobile number' }).fill(phone);
    await this.page.locator('iframe[name="__privateStripeFrame5617"]').contentFrame().getByRole('textbox', { name: 'Full name' }).fill(fullName);
    await this.page.getByRole('button', { name: 'Pay Now' }).click();
  }

}

module.exports = CheckOutPage;
