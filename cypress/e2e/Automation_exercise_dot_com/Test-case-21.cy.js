//Cypress Automation

describe('Add review on product', () => {
    it('Add review on product', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //click on 'Products' button
        cy.xpath("//header//a[@href='/products']").click();
        cy.url().should('eq', 'https://automationexercise.com/products');
        //verify all products are visible
        cy.xpath('//div[@class="features_items"]//h2').should('be.visible');

        //click on 'View Product' of first product
        cy.xpath("//a[@href='/product_details/1']").click();
        cy.url().should('eq', 'https://automationexercise.com/product_details/1');

        cy.fixture('registerUser').then((user) => {
            cy.xpath("//input[@id='name']").type(user.name);
            cy.xpath("//input[@id='email']").type(user.email);
            cy.xpath("//textarea[@id='review']").type(user.review);
            cy.xpath("//button[@id='button-review']").click();
            cy.xpath("//div[@class='alert-success alert']").should('contain', 'Thank you for your review.')
         })  

    })
})