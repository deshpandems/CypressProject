//Cypress Automation

describe('Add to cart from Recommended items', () => {
    it('Add to cart from Recommended items', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //scroll down to footer
        cy.scrollTo('bottom');
        cy.xpath("//div[@class='recommended_items']//h2").should('be.visible');

        //add product to cart from recommended items
        cy.xpath("(//a[contains(@class,'add-to-cart')])[1]").click({ force: true });
        cy.contains('Continue Shopping').click();
        cy.xpath("(//a[contains(@class,'add-to-cart')])[2]").click({ force: true });
        cy.xpath("//p[@class='text-center']//a[@href='/view_cart']").click();   
        cy.xpath("//td[@class='cart_description']//a[contains(text(),'Blue Top')]").should('be.visible');

        //verify that cart page is displayed
        cy.location('href').should('eq', 'https://automationexercise.com/view_cart');

    })
})