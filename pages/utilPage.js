
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

}

module.exports = UtilPage;
