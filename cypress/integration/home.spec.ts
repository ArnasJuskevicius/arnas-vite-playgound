describe('Home Page', () => {
  it('Should check if Infinite scroll working', () => {
    cy.visit('/')

    cy.get('[data-test=card]')
      .its('length')
      .then((elementCount) => {
        cy.scrollTo('bottom')
        // In production wait function would be updated with intercept for two reaons.
        // 1. If response take longer then 300ms this test will fail. We could check count after successful response
        // 2. This could be mocked and not test API if there would be multiple instances of this test.
        cy.wait(300)
        cy.get('[data-test=card]')
          .its('length')
          .should('be.greaterThan', elementCount)
      })
  })
})
