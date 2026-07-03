//Cypress Automation

describe('Verify Product quantity in Cart', () => {
    it('Verify Product quantity in Cart', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //click on 'View Product' of first product
        cy.xpath("//a[@href='/product_details/1']").click();
        cy.url().should('eq', 'https://automationexercise.com/product_details/1');
        //increase quantity to 4
        cy.xpath("//input[@id='quantity']").clear().type('4');
        //click on 'Add to cart' button
        cy.xpath("//button[@class='btn btn-default cart']").click();
        //click on 'Continue Shopping' button
        cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click();
        //click on 'View Cart' button
        cy.xpath("//header//a[@href='/view_cart']").click();
        //verify that product is displayed in cart page with exact quantity
        cy.xpath("//tr[@id='product-1']//td[@class='cart_quantity']//button").should('contain.text', '4');

    })
})