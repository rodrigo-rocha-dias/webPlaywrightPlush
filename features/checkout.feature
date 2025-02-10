Feature: Checkout

  Scenario: Fazer a compra de 1 produto
    Given que acesso a pagina inicial da plush
    And selecionar um produto
    And selecionar a quantidade desejada e adicionar no carrinho
    And confirmar o item que foi adicionado no carrinho e clicar em Checkout
    And preencher os campos de informacoes de cobranca
    And selecionar metodo de entrega
    When preencher os campos de informacoes de pagamento
    Then sera feita compra exibindo mensagem de sucesso


