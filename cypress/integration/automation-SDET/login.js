/// <reference types="Cypress" />

describe('Login Feature Test Suite', function()
{

    before(function(){

        //runs once before all test in the block
        cy.fixture('loginCredentials').then(function(Ldata)
        {
            this.Ldata=Ldata
        })

    })

    it('login',function() {

        //go to the ULR
        cy.visit('https://qa-practical.qa.swimlane.io/login')

        //Fill the Username and password information 
        cy.get('#input-1').should('be.visible')
        cy.get('#input-1').type(this.Ldata.userName)
        cy.get('#input-2').should('be.visible')
        cy.get('#input-2').type(this.Ldata.password)
        
        //Click on the login button 
        cy.wait(1000)
        cy.get('[data-cy="submit__btn"]').should('be.visible')
        cy.get('[data-cy="submit__btn"]').click()
    })

    it('loginFailed',function() {

        //go to the ULR
        cy.visit('https://qa-practical.qa.swimlane.io/login')

        //Fill the Username and password information 
        cy.get('#input-1').should('be.visible')
        cy.get('#input-1').type('badName')
        cy.get('#input-2').should('be.visible')
        cy.get('#input-2').type('badPassword')
        
        //Click on the login button 
        cy.wait(1000)
        cy.get('[data-cy="submit__btn"]').should('be.visible')
        cy.get('[data-cy="submit__btn"]').click()
        cy.get('.login-error').should('be.visible')
    })


} )