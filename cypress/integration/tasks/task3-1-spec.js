describe('Request Function Task ', () => {

    it('cy.request() -should make a request to lorem site', () => {
        cy.request('https://www.lipsum.com/')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.include('<h1>Lorem Ipsum</h1>')

            })
    })
});