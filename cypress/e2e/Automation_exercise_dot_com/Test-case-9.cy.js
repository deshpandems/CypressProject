//Cypress Automation

describe('Search Product', () => {
    it('Search Product', () => {
         // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //click on 'Products' button
        cy.xpath("//header//a[@href='/products']").click();
        cy.url().should('eq', 'https://automationexercise.com/products');

        //search product and verify that result is visible
        cy.xpath("//input[@id='search_product']").type('Tshirt');
        cy.xpath("//button[@id='submit_search']").click();

    })

})