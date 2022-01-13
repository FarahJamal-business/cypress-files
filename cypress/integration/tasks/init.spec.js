import {source} from '../src'
describe('Amazon Automation Check Cart', () => {


    before( ()=> {
        cy.visit('https://amazon.com')

        const input = "harry potter film"
        cy.get(source.searchBox).clear().type(input)
            .get(source.dropDown).select('All Departments', { force: true })
            .get(source.navBarSearch).click()
    });


 it('Should click any of the results to open the product page', () => {
        cy.get(source.productBox)
            .first()

            .click()

            .then(($product) => {
                const product = $product.text().trim();
                cy.get('#add-to-cart-button')
                    .click()

                cy.get('#nav-cart')
                    .click()
                cy.get('.a-truncate-cut').should(($product2) => {
                    expect($product2.text()).eq(product)
                });
            });

    });



});



