//Cypress Automation

describe('Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    it('Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        cy.window().scrollTo('bottom');
        cy.xpath("//a[@id='scrollUp']").should('be.visible').click();
        cy.xpath("//h2[contains(text(),'Subscription')]").should('be.visible')
        cy.xpath("//a[@id='scrollUp']").should('be.visible').click();
        cy.xpath("//h2[contains(text(),'Full-Fledged practice website for Automation Engineers')]").should('be.visible')

    })  
})