#language: pt

Funcionalidade: API de cupons
Como admin da EBAC-SHOP 
Quero criar um serviço de cupom 
Para poder listar e cadastrar os cupons 

Contexto: 
Dado Que acesse a API de cupons 

Cenário: Deve mostrar cupons com 10% de desconto
Quando Efetuar uma pesquisa, na loja EBAC-Shop
E pesquisar por cupons 10%
Então Deve exibir uma mensagem de “Cupom EBAC10 primeira compra” 

Cenário: Não cadastra cupom com código inexistente
Quando Informar os dados para cadastrar o cupom inexistente
Então Deve exibir a mensagem de “Cupom Inexistente”

Cenário: Não deve cadastrar cupons com código existente
E Informar um código já cadastrado
Então Deve exibir uma mensagem de “Cupom já existe”

Cenário:  Deve cadastrar cupons com sucesso
E Informe os dados para cadastrar o cupom
Então A API deve retornar o status 201 cadastrando um novo cupom

Cenário: Deve expor somente cupons válidos
Quando eu selecionar a loja EBAC-SHOP
E Clicar em visualizar cupons
Então Deve exibir uma mensagem “Cupons válidos para hoje da loja EBAC-SHOP”
