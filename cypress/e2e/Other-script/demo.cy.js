describe('Google Test', () => {
  it('Open Google', () => {
    cy.visit('https://www.google.com')
    cy.title().should('contain', 'Google')
  })
})