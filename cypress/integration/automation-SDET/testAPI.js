/// <reference types="Cypress" />

describe('testing token', () => {
    before(function(){

        //runs once before all test in the block
        cy.fixture('loginCredentials').then(function(Ldata)
        {
            this.Ldata=Ldata
        })

    })
  
    //API Login
    it('test login API', () => {
      cy.request({
        method:'POST', 
        url: 'https://qa-practical.qa.swimlane.io/api/user/login',
        body: {
            username: "rosvin.piedra",
            password: "sebKAz9A8CRrDTxs"
        }
      })
      .as('loginResponse')
      .then(response => {
        Cypress.env('token', response.body.token);
        Cypress.env('appID', response.body.permission.aF5sqnNFCc36kO9_J.id)
      })
      .its('status')
      .should('eq', 200);
  })
  
    //API Create
    it('test create record API', () => {
      const token = Cypress.env('token');
      const appID = Cypress.env('appID');
      const authorization = `Bearer ${ token }`;
      cy.log('Token is ' + token);
      cy.generateRandom(3).then(bodyId => {
        cy.log(bodyId)
      })
      //cy.log('AppID is ' + appID)
      const createRecord = {
        method: 'POST',
        url: `https://qa-practical.qa.swimlane.io/api/app/${appID}/record`,
        headers: {
          authorization,
        },
        body: {
          "$type": "Core.Models.Record.Record, Core",
          "allowed": [],
          "trackingId": 0,
          "applicationId": "aF5sqnNFCc36kO9_J",
          "referencedRecordIds": [],
          "referencedByIds": [],
          "isNew": true,
          "values": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib",
              "aFjm80LnbJf780V6p": "Heredia",
              "aGgc3qp6gt3dDR_na": "apitestapi@test.com",
              "aG_YiSItNjs7vGALq": "",
              "aHdR_gHQmRT8ItVTL": "Apitest",
              "aHxOeHmCTIGd_hg1b": "Test",
              "aIaHwVkkr_seOK096": "Heredia",
              "aJDBDjjIFiTemxLGc": "Street Address 1",
              "aJX7sLD3xZH9TlVps": "1234567890",
              "aJr4VxhqeQ4fAZgO7": "",
              "aKTyoAgO27gfZC0Vd": 14000,
              "5fed3a0c7571db02a9226400": 55
          },
          "repeatFieldCurrentValues": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
          },
          "actionsExecuted": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib"
          },
          "visualizations": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.VisualizationData, Core]], System.Private.CoreLib]], System.Private.CoreLib"
          },
          "applicationRevision": 0,
          "locked": false,
          "comments": {
              "$type": "System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Collections.Generic.List`1[[Core.Models.Record.Comments, Core]], System.Private.CoreLib]], System.Private.CoreLib"
          },
          "createdDate": "2022-02-22T18:32:52.2406237Z",
          "modifiedDate": "0001-01-01T00:00:00",
          "sessionTimeSpent": 55,
          "totalTimeSpent": 55,
          "timeTrackingEnabled": true,
          "isHangfireCreatedAndUnpersisted": false,
          "infiniteLoopFlag": false,
          //"id": bodyId,
          "id": "a8n9tXkdr7XYdmEerri", //cambiar este id por random
          "disabled": false,
          "readOnly": false,
          "coeditSession": {
              "editors": [
                  {
                      "id": "aOAvW_4V6ySIks7bm",
                      "name": "Rosvin Piedra"
                  }
              ],
              "values": {},
              "fields": {}
          }
      }
      };
  
      cy.request(createRecord)
        .as('createRecord')
        .then(response => {
          Cypress.env('recordID', response.body.id);
        })
        .its('status')
        .should('eq', 200);
    })
  
    //API Get
    it('test get record API', () => {
      const token = Cypress.env('token');
      const appID = Cypress.env('appID');
      const recordID = Cypress.env('recordID');
      const authorization = `bearer ${ token }`;
      cy.log('Token is ' + token)
      cy.log('Application ID is ' + appID)
      cy.log('Record ID is ' + recordID)
      const options = {
        method: 'GET',
        url: `https://qa-practical.qa.swimlane.io:443/api/app/${appID}/record/${recordID}`,
        headers: {
          authorization,
        }};
  
      cy.request(options)
        .its('status')
        .should('eq', 200);
    })

    //API Delete
    it('test delete record API', () => {
        const token = Cypress.env('token');
        const appID = Cypress.env('appID');
        const recordID = Cypress.env('recordID');
        const authorization = `bearer ${ token }`;
        cy.log('Token is ' + token)
        cy.log('Application ID is ' + appID)
        cy.log('Record ID is ' + recordID)
        const options = {
          method: 'DELETE',
          url: `https://qa-practical.qa.swimlane.io/api/app/${appID}/record/${recordID}`,
          headers: {
            authorization,
          }};
    
        cy.request(options)
          .its('status')
          .should('eq', 204);
      })
  
  });