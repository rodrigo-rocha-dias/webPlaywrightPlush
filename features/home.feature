Feature: Acessar a página inicial

  Scenario: Verificar o título da página
    Given que acesso a pagina inicial da plush
    Then o titulo da pagina deve ser "Spree Commerce DEMO Spree"
