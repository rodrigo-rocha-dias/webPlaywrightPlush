Feature: Swag Labs - Acessar a página inicial

  Background:
    Given que acesso a pagina inicial do swag labs

  Scenario: Login com usuário padrão
    And autenticar com o usuario "standard_user"
    Then deve carregar tela home "Spree Commerce DEMO Spree"

  Scenario: Checkout completo
    And autenticar com o usuario "standard_user"
    And selecionar itens para colocar no carrinho
    And confirmar o item que foi adicionado ao carrinho e clicar em Checkout
    When preencher os campos de informacoes de cobranca swag labs
    Then sera feito compra com sucesso
