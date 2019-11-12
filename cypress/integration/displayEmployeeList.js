discribe('/index Display a list of employees',() => {
  it('when user visits the page',() => {
    cy.visit('http://localhost:3000')
    cy.get('h1')
    .should('contain','Employee list')
  })
})