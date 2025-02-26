
class HomePage {
  constructor(page) {
    this.page = page;
  }

  async visitarPagina() {
    await this.page.goto('https://demo.spreecommerce.org');
  }

  async selecionarProdutoHome() {
    await this.page.getByRole('link', { name: 'RESURFACE SCRUB // FACE +' }).click();
  }

}

module.exports = HomePage;
