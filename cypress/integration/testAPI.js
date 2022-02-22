/// <reference types="Cypress" />

let identity

Cypress.Commands.add('postToken', () => {
    cy.request({
        method: 'POST',
        url: "https://qa-practical.qa.swimlane.io/api/user/login", //get from cypress.env.json
        form: true, //sets to application/x-www-form-urlencoded
        body: {
            grant_type: 'client_credentials',
            scope: 'xero_all-apis'
        },
        auth:{
            username: "rosvin.piedra",
            password: "sebKAz9A8CRrDTxs"
        }
    })
        .its('body')
        .then(identity => {
            cy.setLocalStorage('identity_token' , identity.token)
            cy.log(identity_token)
        })
})