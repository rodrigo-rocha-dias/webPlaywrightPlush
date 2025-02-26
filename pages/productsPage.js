
class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async selecionarQuantidadeDesejada() {
    await this.page.locator('form').filter({ hasText: 'Quantity Add To Cart Add To' }).getByRole('button').nth(1).click();
  }

}

module.exports = ProductsPage;
