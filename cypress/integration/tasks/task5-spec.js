import { source } from '../src'
describe('Forbes View Testing', () => {
    it('should call api and check views equality', () => {
        let url=Cypress.env('forbesApiUrl')
        cy.request({
            method:'GET',
             url:url
}).should((res)=>{
    
      cy.intercept('GET',url,
          
              {
               body:{
                   'views':res.body.views  } 
              }
              
      )    
      cy.visit(Cypress.env('forbesArticleUrl'))
      cy.get('.pageviews').should('contain',res.body.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
      
})
      

      
    });

});