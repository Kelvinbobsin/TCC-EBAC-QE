import { Dado, Quando, E, Entao } from 'cypress-cucumber-preprocessor/steps'
const { faker } = require('@faker-js/faker')
const { loginPage, homePage } = require('../../support/page_objects')
const login = require('../../fixtures/perfil.json')

Dado('que acesso a página da minha conta', () => {
    cy.visit('minha-conta')
})

Quando('eu inserir um usário ativo', () => {
    cy.login(login.user, login.pass)

})

Quando('eu inserir o usuário inválido e a senha', () => {
    cy.login(login.invalid, login.pass)
})

Quando('eu inserir o usuário com senha incorreta', () => {
    cy.login(login.user, login.wrong)
})

Entao('deve exibir uma mensagem de login com sucesso', () => {
    homePage.validateAccess()
})

Entao('deve exibir uma mensagem de usuário inexistente', () => {
    loginPage.validateInvalidUser()
})

Entao('deve exibir uma mensagem de senha incorreta', () => {
    loginPage.validateWrongPassword()
})