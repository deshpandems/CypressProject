//Cypress Automation

describe(' Verify Subscription in Cart page', () => {
    it(' Verify Subscription in Cart page', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //click on 'Cart' button
        cy.xpath("//header//a[@href='/view_cart']").click();
        cy.scrollTo('bottom')
        cy.xpath("//h2[contains(text(),'Subscription')]").should('be.visible')
        cy.xpath("//input[@id='susbscribe_email']").type('test@example.com')
        cy.xpath("//button[@id='subscribe']").click()
        cy.xpath("//div[@class='alert-success alert']").should('contain', 'You have been successfully subscribed!')

    })
})