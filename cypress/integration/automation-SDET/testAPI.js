/// <reference types="Cypress" />

describe('testing token', () => {
    beforeEach(() => {
      //cy.getToken;
    });
      
    it('test get record', () => {
        const token = Cypress.env('token');
        const authorization = `bearer ${ token }`;
        cy.log('Token is ' + token)
        const options = {
          method: 'GET',
          url: `https://qa-practical.qa.swimlane.io:443/api/app/aF5sqnNFCc36kO9_J/record/a8n9tXkdr7XYdmEered`,
          headers: {
            authorization,
          }};
    
        cy.request(options)
          .its('status')
          .should('eq', 200);
      })

    it('test create record', () => {
      const token = Cypress.env('token');
      //const appID = Cypress.env('appID');
      const authorization = `Bearer ${ token }`;
      cy.log('Token is ' + token);
      //cy.log('AppID is ' + appID)
      const createRecord = {
        method: 'POST',
        url: `https://qa-practical.qa.swimlane.io/api/app/aF5sqnNFCc36kO9_J/record`,
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
          "id": "a8n9tXkdr7XYdmEeryh",
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
        .its('status')
        .should('eq', 200);
    })
  });