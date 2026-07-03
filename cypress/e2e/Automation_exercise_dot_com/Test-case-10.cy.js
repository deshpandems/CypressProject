//Cypress Automation

describe('Verify Subscription in home page', () => {
    it('Verify Subscription in home page', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')
        
        // Scroll down to footer
        cy.scrollTo('bottom')
        cy.xpath("//h2[contains(text(),'Subscription')]").should('be.visible')
        cy.xpath("//input[@id='susbscribe_email']").type('test@example.com')
        cy.xpath("//button[@id='subscribe']").click()
        cy.xpath("//div[@class='alert-success alert']").should('contain', 'You have been successfully subscribed!')
    })
})