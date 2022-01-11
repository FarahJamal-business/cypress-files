describe('Request Function Task ', () => {


    it('should call api and make some cahnges on it', () => {
        let url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
cy.log(Cypress.env('test'))

        cy.intercept('GET', url, {
            body: {
                squadName: 'Hogwarts School',
                homeTown: 'DEagon Ally',
                formed: "1998",
                active: false,
                "members": [
                    {
                        name: "alan Rickman",
                        age: 59,
                        secretIdentity: "severus snape",
                        powers: ["ability to read another person's mind",
                            "Flight",
                            "Occlumencyy"]
                    }
                ]
            },
        })
        cy.visit('https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html')
    });
});