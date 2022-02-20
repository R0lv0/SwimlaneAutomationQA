/// <reference types="Cypress" />

describe('Create New Record Feature Test Suite', function()
{

    before(function(){
        //runs once before all test in the block
        cy.fixture('loginCredentials').then(function(Ldata)
        {
            this.Ldata=Ldata
        })

        cy.fixture('EmployeePersonalInformation').then(function(Edata)
        {
            this.Edata=Edata
        })
    })

    it('Create New Record',function() {

        //Login
        cy.login(this.Ldata.userName, this.Ldata.password)

        //validate the landing page
        cy.get('[data-cy="action__btn"]').should('be.visible')
    
        //validate that the swimlane workspace load as expected
        cy.get('.logo-text').should('be.visible')
    
        //validate Add New Record
        cy.wait(5000)
        cy.get('[data-cy="new-record1__btn"]').should('be.visible')
        cy.get('[data-cy="new-record1__btn"]').click()
    
        //Fill Employee Personal Information 
        cy.fillEmployeePersonalInfo(
            this.Edata.name,
            this.Edata.lastName,
            this.Edata.city,
            this.Edata.streedAddress,
            this.Edata.state,
            this.Edata.telephone,
            this.Edata.zip,
            this.Edata.mail
        )
    
        //Click on Save button 
        cy.get('.nav > :nth-child(1) > div > .save-button').should('be.visible')
        
        })

} )