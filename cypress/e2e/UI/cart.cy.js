import { Dado, Quando, E, Entao } from 'cypress-cucumber-preprocessor/steps'
const { produtoPage, carrinhoPage } = require('../../support/page_objects')
const produto = require('../../fixtures/produtos.json')

Dado('que eu acesse a página de produtos da EBAC-SHOP', () => {
    cy.visit("produtos")
})

Quando('eu adiciono um produto ao carrinho', () => {
    produtoPage.inserirProduto(produto[3].produto, produto[3].tamanho, produto[3].cor, produto[3].quantidade)
})

E('eu vou para o carrinho', () => {
    produtoPage.clicarBotaoCarrinho()
})

Entao('o produto deve ser adicionado ao carrinho', () => {
    carrinhoPage.validateProduct()
})