// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//Login Command
Cypress.Commands.add('login', (userName, password) => {

    //go to the ULR
    cy.visit('https://qa-practical.qa.swimlane.io/login')
    //Fill the Username and password information 
    cy.get('#input-1').type(userName)
    cy.get('#input-2').type(password)
    //Click on the login button 
    cy.wait(1000)
    cy.get('[data-cy="submit__btn"]').click()

})

//Bad Login Command
Cypress.Commands.add('badLogin', () => {

    
    //Fill the Username and password information 
    cy.get('#input-1').type("rosvin.piedra")
    cy.get('#input-2').type("badpass")

    //Click on the login button   
    for (let i = 0; i < 1; i++){
        cy.wait(1000)
        cy.get('[data-cy="submit__btn"]').click()
    }

}) 

//Fill Employee Personal Information 
Cypress.Commands.add('fillEmployeePersonalInfo', (name, lastName, city, streedAddress, state, telephone, zip, mail) => {

    //Name Field
    cy.get('div input[name="aHdR_gHQmRT8ItVTL"]').type(name)
    //LastName Field
    cy.get('div input[name="aHxOeHmCTIGd_hg1b"]').type(lastName)
    //City Field 
    cy.get('div input[name="aFjm80LnbJf780V6p"]').type(city)
    //Streed Address Field
    cy.get('div div [name="aJDBDjjIFiTemxLGc"]').type(streedAddress)
    //State Field
    cy.get('div input[name="aIaHwVkkr_seOK096"]').type(state)
    //Telephone Field
    cy.get('div input[name="aJX7sLD3xZH9TlVps"]').type(telephone)
    //Zip Field
    cy.get('div input[name="aKTyoAgO27gfZC0Vd"]').type(zip)
    //Mail Field
    cy.get('div input[name="aGgc3qp6gt3dDR_na"]').type(mail)

})

//Delete Record Command
Cypress.Commands.add('deleteRecord', () => {

    //Delete the record
    cy.wait(2000)
    cy.get(':nth-child(4) > .btn').click()
    cy.wait(2000)
    cy.get('div button[tabindex="0"]').click()

})

//Generate Random
Cypress.Commands.add('generateRandom', (length) => {

    var result           = 'a8n9tXkdr7XYdmEe'
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   cy.log(result)
   return cy.wrap(result) 
   
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


