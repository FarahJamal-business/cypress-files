context('Network Requests', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/network-requests')
    })
  
    // Manage HTTP requests in your app
  
    // it('cy.request() - make an XHR request', () => {
    //   // https://on.cypress.io/request
    //   cy.request('https://jsonplaceholder.cypress.io/comments')
    //     .should((response) => {
    //       expect(response.status).to.eq(200)
    //       // the server sometimes gets an extra comment posted from another machine
    //       // which gets returned as 1 extra object
    //       expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
    //       expect(response).to.have.property('headers')
    //       expect(response).to.have.property('duration')
    //     })
    // })



    // it('cy.request() - verify response using BDD syntax', () => {
    //     cy.request('https://jsonplaceholder.cypress.io/comments')
    //     .then((response) => {
    //       // https://on.cypress.io/assertions
    //       expect(response).property('status').to.equal(200)
    //       expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
    //       expect(response).to.include.keys('headers', 'duration')
    //     })
    //   })





//   it('cy.request() with query parameters', () => {
//     // will execute request
//     // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
//     cy.request({
//       url: 'https://jsonplaceholder.cypress.io/comments',
//       qs: {
//         postId: 1,
//         id: 3,
//       },
//     })
//     .its('body')
//     .should('be.an', 'array')
//     .and('have.length', 1)
//     .its('0') // yields first element of the array
//     .should('contain', {
//       postId: 1,
//       id: 3,
//     })
//   })




// it('cy.request() - pass result to the second request', () => {
//     // first, let's find out the userId of the first user we have
//     cy.request('https://jsonplaceholder.cypress.io/users?_limit=6')
//       .its('body') // yields the response object
//       .its('5')
//        // yields the first element of the returned list
//       // the above two commands its('body').its('0')
//       // can be written as its('body.0')
//       // if you do not care about TypeScript checks
//       .then((user) => {
//         expect(user).property('id').to.be.a('number')
//         // make a new post on behalf of the user
//         cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
//           userId: user.id,
//           title: 'Cypress Test Runner',
//           body: 'Fast, easy and reliable testing for anything that runs in a browser.',
//         })
//       })
//       // note that the value here is the returned value of the 2nd request
//       // which is the new post object
//       .then((response) => {
//         expect(response).property('status').to.equal(201) // new entity created
//         expect(response).property('body').to.contain({
//           title: 'Cypress Test Runner',
//         })

//         // we don't know the exact post id - only that it will be > 100
//         // since JSONPlaceholder has built-in 100 posts
//         expect(response.body).property('id').to.be.a('number')
//           .and.to.be.gt(100)

//         // we don't know the user id here - since it was in above closure
//         // so in this test just confirm that the property is there
//         expect(response.body).property('userId').to.be.a('number')
//       })
//   })







// it('cy.request() - save response in the shared test context', () => {
//     // https://on.cypress.io/variables-and-aliases
//     cy.request('https://jsonplaceholder.cypress.io/users?_limit=9')
//       .its('body').its('3') // yields the first element of the returned list
//       .as('user') // saves the object in the test context
//       .then(function () {
//         // NOTE 👀
//         //  By the time this callback runs the "as('user')" command
//         //  has saved the user object in the test context.
//         //  To access the test context we need to use
//         //  the "function () { ... }" callback form,
//         //  otherwise "this" points at a wrong or undefined object!
//         cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
//           userId: this.user.id,
//           title: 'Cypress Test Runner',
//           body: 'Fast, easy and reliable testing for anything that runs in a browser.',
//         })
//         .its('body').as('post') // save the new post from the response
//       })
//       .then(function () {
//         // When this callback runs, both "cy.request" API commands have finished
//         // and the test context has "user" and "post" objects set.
//         // Let's verify them.
//         expect(this.post, 'post has the right user id').property('userId').to.equal(this.user.id)
//       })
//   })






// it('cy.intercept() - route responses to matching requests', () => {
//     // https://on.cypress.io/intercept

//     let message = 'whoa, this comment does not exist'

//     // Listen to GET to comments/1
//     cy.intercept('GET', '**/comments/*').as('getComment')

//     // we have code that gets a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-btn').click()

//     // https://on.cypress.io/wait
//     cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])

//     // Listen to POST to comments
//     cy.intercept('POST', '**/comments').as('postComment')

//     // we have code that posts a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-post').click()
//     cy.wait('@postComment').should(({ request, response }) => {
//       expect(request.body).to.include('email')
//       expect(request.headers).to.have.property('content-type')
//       expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
//     })

//     // Stub a response to PUT comments/ ****
//     cy.intercept({
//       method: 'PUT',
//       url: '**/comments/*',
//     }, {
//       statusCode: 404,
//       body: { error: message },
//       headers: { 'access-control-allow-origin': '*' },
//       delayMs: 500,
//     }).as('putComment')

//     // we have code that puts a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-put').click()

//     cy.wait('@putComment')

//     // our 404 statusCode logic in scripts.js executed
//     cy.get('.network-put-comment').should('contain', message)
//   })







    describe('Assertion Test Practice',()=>{
    it('should make anassertion',()=>{
// cy.get('.assertion-table')
// .find('tbody tr:last')
// .should('have.class','success')
// .find('td')
// .first()

// .should('have.text', 'Column content')
// .should('contain', 'Column content')
// .should('have.html', 'Column content')
// .invoke('text')
// .should('match', /column contenst/i)


/*================================================================*/


// cy.get('.assertion-table')
// .find('tbody tr:last')
// // finds first <td> element with text content matching regular expression
// .contains('td', /column content/i)
// .should('be.visible')

/*================================================================*/


// cy.get('.assertions-link')
//         .should('have.class', 'active')
//         .and('have.attr', 'href')
//         .and('include', 'cypress.io')


/*================================================================*/

    // expect(true).to.be.true
    // const o = { foo: 'bar' }

    // expect(o).to.equal(o)
    // expect(o).to.deep.equal({ foo: 'bar' })
    // expect('FooBar').to.match(/bar$/i)


/*================================================================*/


    // cy.get('.assertions-p')
    // .find('p')
    // .should(($p) => {
    //     const texts = $p.map((i, el) => Cypress.$(el).text())
    //     const paragraphs = texts.get()
    //     expect(paragraphs, 'has 3 paragraphs').to.have.length(3)
    //     expect(paragraphs, 'has expected text in each paragraph').to.deep.eq([
    //     'Some text from first p',
    //     'More text from second p',
    //     'And even more text from third p',
    //   ])
    // })

/*=========================================================================*/


    // cy.get('.docs-header')
    // .find('div')
    // .should(($div) => {
    //   expect($div).to.have.length(1)

    //   const className = $div[0].className

    //   expect(className).to.match(/heading-/)
    // })
    // .then(($div) => {
    //   expect($div, 'text content').to.have.text('Introduction')
    // })

/*=========================================================================*/


// cy.get('.docs-header')
// .find('div')
// .should(($div) => {
//   if ($div.length !== 1) {
//     throw new Error('Did not find 1 element')
//   }

//   const className = $div[0].className

//   if (!className.match(/heading-/)) {
//     throw new Error(`Could not find class "heading-" in ${className}`)
//   }
// })

/*=========================================================================*/

    
    // let text

 
    // const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

    // cy.get('.two-elements')
    //   .find('.first')
    //   .then(($first) => {
    //     text = normalizeText($first.text())
    //   })

    // cy.get('.two-elements')
    //   .find('.second')
    //   .should(($div) => {
    //     const secondText = normalizeText($div.text())

    //     expect(secondText, 'second text').to.equal(text)
    //   })
  
   /*=========================================================================*/

//    const person = {
//     name: 'Joe',
//     age: 20,
//   }

//   assert.isObject(person, 'value is object') 

   /*=========================================================================*/

    //    cy.get('#random-number')
    //     .should(($div) => {
    //       const n = parseFloat($div.text())

    //       expect(n).to.be.gte(1).and.be.lte(10)
    //     })


    /*==============================================================================*/

//     cy.window().should('have.property','prompt')
    
    
//    // https://on.cypress.io/end

//     // cy.end is useful when you want to end a chain of commands
//     // and force Cypress to re-query from the root element
//     cy.get('.misc-table').within(() => {
//         // ends the current chain and yields null
//         cy.contains('Cheryl').click().end()
  
//         // queries the entire table again
//         cy.contains('Charles').click()
//       })


// cy.get('.query-form').within((el) => {
//     cy.get('input:first')
//   })


cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

cy.get('@comments').should((response) => {
  expect(response.body).to.have.length(500)
  expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
})
    });
    
});
});