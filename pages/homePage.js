const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async visitarPagina() {
    await this.page.goto('https://demo.spreecommerce.org');
  }


}

module.exports = HomePage;
