import { source } from '../src'
describe('Forbes WGO And HOG Testing', () => {
    it('should call api and make some cahnges on it for HOG', () => {
        cy.intercept('GET', source.forbesApiHOG, {
            body: {
                "PercentChangeFromPreviousClose": +1.687,
                "ChangeFromPreviousClose": +0.67,
            }
        })
        cy.visit(source.forbesURL)
        cy.get(source.hgoSpan).should('have.class', source.colorGreen)
    });

    it('should call api and make some cahnges on it for WGO', () => {

        cy.intercept('GET', source.forbesApiWGO, {
            body:
            {
                "PercentChangeFromPreviousClose": -0.7,
                "ChangeFromPreviousClose": -0.37,
            }
        })
        cy.visit(source.forbesURL)
        cy.get(source.wgoSpan).should('have.class', source.colorRed)
    });
});