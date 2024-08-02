#language: pt

Funcionalidade: Adicionar item ao carrinho
Como cliente da EBAC-SHOP 
Quero adicionar produtos no carrinho 
Para realizar a compra dos itens 

Contexto: 
Dado que eu acesse a página de produtos da EBAC-SHOP 

Cenário: Incluir item ao carrinho 
Quando eu adicionar um produto ao carrinho 
Então o produto deve ser adicionado ao carrinho 

Cenário: Finalizar a compra dos itens 
Quando eu adicionar produtos no carrinho 
E finalizar a compra 
Então deve aparecer uma mensagem “Compra efetuado com sucesso” 

Cenário: Adicionar produtos sem estoque 
Quando eu adiciono um produto sem estoque 
Então deve exibir uma mensagem de alerta “Desculpe, mas este produto está indisponível”. 

Cenário: Limite de produtos 
Quando eu adicionar 11 produto ao carrinho 
Então deve aparecer mensagem de alerta “Você excedeu o limite de produtos” 