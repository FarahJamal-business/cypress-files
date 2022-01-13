import { source } from '../src'
describe('Forbes Gallary Data from Api Testing', () => {
    it('should call api and check images data from the Api', () => {

        cy.visit(source.forbesGalleryUrl)
        let url = source.forbesApiUrl_2
        cy.request({
            method: 'GET',
            url: url
        }).should((res) => {
            // let arr = eval(res.body)
            let arr=JSON.parse(res.body)

            let box = 2;
            let iteration = 1
            cy.wrap(arr).each(($data,index) => {
                
                // cy.get(':nth-child(' + box + ') > :nth-child(' + (iteration) + source.img).invoke('attr', 'style').should('contain', $data.image)
                // cy.get(':nth-child(' + box + ') > :nth-child(' + (iteration) + source.img).invoke('attr', 'href').should('eq', $data.uri)
                // cy.get(':nth-child(' + box + ') > :nth-child(' + iteration + source.txt).invoke('text').should('eq', $data.title)
     cy.get('.grid__image').each(($data2)=>{
                    cy.log($data2[index])

                // cy.wrap($data2[index]).should('eq', $data.uri)
                // cy.get(':nth-child(' + box + ') > :nth-child(' + (iteration) + source.img).invoke('attr', 'href').should('eq', $data.uri)
                // cy.get(':nth-child(' + box + ') > :nth-child(' + iteration + source.txt).invoke('text').should('eq', $data.title)
                })

            });
           
        });

    });
});

