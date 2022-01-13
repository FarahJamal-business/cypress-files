import { source } from '../src'

describe('Amazon Automation Search URL Check', () => {

    before(() => {
        cy.visit('https://amazon.com')
        cy.log(window)
    });

    it('should check if url contains searched word from cypress.json', () => {

        const input = Cypress.env('SEARCH_WORD')
        cy.get(source.searchBox).clear().type(input)
        cy.wait(500)
            .get(source.dropDown).select('All Departments', { force: true })
            .get(source.navBarSearch).click()
        cy.url().should('include', input.replace(/ /g, "+"))
    })

    // it('should check if url contains searched word from package.json', () => {

    //     const input = Cypress.env('SEARCH_URL')
    //     cy.get(source.searchBox).clear().type(input)
    //     cy.wait(500)
    //         .get(source.dropDown).select('All Departments', { force: true })
    //         .get(source.navBarSearch).click()
    //     cy.url().should('include', input.replace(/ /g, "+"))
    // })
    it('should click on All button and search for "#FoundItOnAmazon" and check if it\'s equal on the second page', () => {
        cy.get(source.hamNav).should('be.visible').click();
        cy.get(source.menuVisibiliy).should('be.visible').then(()=>{
            cy.get("li").get(source.menuItem)
        cy.get(source.menuSeeAll).last().click();
        cy.contains('#FoundItOnAmazon').click();
        cy.get('svg title').should('contain', '#FoundItOnAmazon')
        })
        
        cy.writeFile('path/to/message.txt', 'Hello World')
        cy.readFile('path/to/message.txt').then((text) => {
          expect(text).to.equal('Hello World') // true
        })
    
        // cy.window({ timeout: 100 }).should('have.property', 'appReady',true)

    })



});



