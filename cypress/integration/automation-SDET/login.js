/// <reference types="Cypress" />

describe('Login Feature Test Suite', function () {

    before(function () {

        //runs once before all test in the block
        cy.fixture('loginCredentials').then(function (Ldata) {
            this.Ldata = Ldata
        })

    })

    it('login', function () {

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

        //Validate that you have access to the site
        cy.get('[data-cy="action__btn"]').should('be.visible')
    })

    it('loginFailed', function () {

        //go to the ULR
        cy.visit('https://qa-practical.qa.swimlane.io/login')

        //Fill the Username and password wrong information 
        cy.get('#input-1').should('be.visible')
        cy.get('#input-1').type('badName')
        cy.get('#input-2').should('be.visible')
        cy.get('#input-2').type('badPassword')

        //Click on the login button 
        cy.wait(1000)
        cy.get('[data-cy="submit__btn"]').should('be.visible')
        cy.get('[data-cy="submit__btn"]').click()

        //Validate the error message
        cy.get('.login-error').should('be.visible')
    })

    //Comment TC because it can block the account 
    /*it('loginFailedMultipleAttemps',function() {

        //go to the ULR
        cy.visit('https://qa-practical.qa.swimlane.io/login')

        //Fill the Username and password wrong information 
        cy.badLogin()
        
        //Validate the error message
        cy.get('.tip-container').should('be.visible')
        cy.get('.tip-content--template').contains
        ('Login failed. Verify your username and password and try again. You have one attempt left.')

        //Add valid credentials in order to refresh the attemps
        cy.login(this.Ldata.userName, this.Ldata.password) 
    })*/

})