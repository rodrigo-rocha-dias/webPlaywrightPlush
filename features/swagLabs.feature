Feature: Acessar a página inicial

  # Scenario: Login com usuário padrão
  #   Given que acesso a pagina inicial do swag labs
  #   And autenticar com o usuario "standard_user"
  #   Then deve carregar tela home "Spree Commerce DEMO Spree"

  Scenario: Checkout completo
    Given que acesso a pagina inicial do swag labs
    And autenticar com o usuario "standard_user"
    And selecionar itens para colocar no carrinho
    And confirmar o item que foi adicionado no carrinho e clicar em Checkout
    When preencher os campos de informacoes de cobranca
    Then sera feito compra com sucesso