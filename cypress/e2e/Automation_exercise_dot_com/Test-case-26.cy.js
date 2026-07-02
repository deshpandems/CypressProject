describe('Add to cart from Recommended items', () => {
    it('Add to cart from Recommended items', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //scroll down
        cy.window().scrollTo('bottom');
        cy.xpath("//a[@id='scrollUp']").should('be.visible').click();
        cy.xpath("//h2[contains(text(),'Subscription')]").should('be.visible')

        //scroll Top
        cy.window().scrollTo('top');
        cy.xpath("//h2[contains(text(),'Full-Fledged practice website for Automation Engineers')]").should('be.visible')

    })
})