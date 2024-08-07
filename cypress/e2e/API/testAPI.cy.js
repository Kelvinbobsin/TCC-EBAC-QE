/// <reference types="cypress" />
const token = require('../../fixtures/token.json') 
const data = require('../../fixtures/data.json')


describe('Teste de API de cupons', () => {


    it('Listar cupons', () => {           
        cy.request({
            method: 'GET', 
            url: `coupons`,
            headers: {authorization: token.auth}
        }).then(response => {
            expect(response.status).to.equal(200)
            expect([response.body]).to.be.instanceOf(Array)
        })    
})

    it('cadastro de cupom com dados inválidos', () => {           
        cy.request({
            method: 'GET', 
            url: `coupons/${data.fake_id}`,
            headers: {authorization: token.auth}, 
            failOnStatusCode: false 
        }).then(response => {
            expect(response.status).to.equal(404)
            expect(response.body.message).to.contain("ID inválido.")        
        })    
    })
    


    it('Não deve permitir cupom duplicado', () => {
        cy.request({
            method: 'POST', 
            url: `coupons/`,
            headers: {authorization: token.auth}, 
            body: 
            {
                "code": data.code,
                "amount": data.amount,
                "discount_type": data.discount_type,
                "description": data.description
              }, 
              failOnStatusCode: false  
        }).then(response => {
            expect(response.status).to.equal(400) 
            expect(response.body.message).to.contain("O código de cupom já existe")   
        })  
    })



});