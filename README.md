# WebPlaywrightPlush

Este projeto utiliza **Playwright** com **Cucumber** e **JavaScript**, seguindo as melhores práticas como o **Page Object Model (POM)** e a reutilização de passos e páginas através de **Utils**.

## 📌 Tecnologias Utilizadas

- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- JavaScript (Node.js)
- Page Object Model (POM)

## 📂 Estrutura do Projeto

```
webplaywrightPlush/
├── features/           # Arquivos .feature do Cucumber
│   ├── acessar_pagina.feature
├── steps/              # Passos dos testes (Step Definitions)
│   ├── util.step.js
│   ├── acessar_pagina.step.js
├── pages/              # Implementação do Page Object Model (POM)
│   ├── utilPage.js
│   ├── acessarPagina.js
├── support/            # Configurações do Cucumber
│   ├── world.js
│   ├── hooks.js
├── playwright.config.js # Configuração do Playwright
├── package.json        # Dependências do projeto
├── cucumber.js         # Configuração do Cucumber
```

## 🚀 Instalação

Antes de começar, certifique-se de ter o **Node.js** instalado em sua máquina.

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/webplaywrightPlush.git
   cd webplaywrightPlush
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Instale o Playwright:
   ```sh
   npx playwright install
   ```

## 🏗 Configuração do Projeto

### 📜 Arquivo `playwright.config.js`

```js
const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  use: {
    baseURL: 'https://demo.spreecommerce.org',
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
  },
});
```

### 📜 Arquivo `cucumber.js`

```js
module.exports = {
  default: {
    require: ["./support/world.js", "./support/hooks.js", "./steps/**/*.js"],
    format: ["progress-bar"],
    publishQuiet: true,
    paths: ["features/*.feature"],
    worldParameters: {},
  },
};
```

## 🏗 Estrutura de Testes

### 📜 Exemplo de Feature File

```gherkin
Feature: Acessar a página inicial

Scenario: Verificar o título da página
  Given que acesso a pagina inicial da plush
  Then o titulo da pagina deve ser "Spree Commerce DEMO Spree"
```

### 📜 Exemplo de Step Definition

```js
const { Given, Then } = require('@cucumber/cucumber');
const UtilPage = require('../pages/utilPage');

Given('selecionar um produto', async function () {
  this.UtilPage = new UtilPage(this.page);
  await this.UtilPage.selecionarProdutoHome();
});
```

### 📜 Exemplo de Page Object (POM)

```js
const { expect } = require('@playwright/test');

class UtilPage {
  constructor(page) {
    this.page = page;
  }

  async selecionarProdutoHome() {
    await this.page.getByRole('link', { name: 'RESURFACE SCRUB // FACE +' }).click();
  }
}

module.exports = UtilPage;
```

## ▶️ Executando os Testes

Para rodar os testes, utilize o comando:
```sh
npx cucumber-js
```

Se quiser rodar os testes no modo headful (com navegador visível), edite `playwright.config.js` e defina `headless: false`.

## 🏆 Melhores Práticas Utilizadas

✅ **Page Object Model (POM):** Facilita a manutenção e reutilização de código.

✅ **Utils:** Criamos uma `utilPage.js` e `util.step.js` para evitar repetição e centralizar funções comuns.

✅ **Cucumber com Gherkin:** Define cenários de teste de forma legível e bem organizada.

## 🤝 Contribuição

Caso queira contribuir, fique à vontade para abrir um Pull Request! 😉

---

📌 **Autor:** Rodrigo Dias

📌 **Tecnologias:** Playwright + Cucumber + JavaScript

📌 **Licença:** ISC

