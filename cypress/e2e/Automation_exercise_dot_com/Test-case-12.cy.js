//Cypress Automation

describe('Add Products in Cart', () => {
    it('Add Products in Cart', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //click on 'Products' button
        cy.xpath("//header//a[@href='/products']").click();
        cy.url().should('eq', 'https://automationexercise.com/products');

        //click on 'Add to cart' for any product on home page
        cy.xpath("//div[@class='productinfo text-center']//a[@data-product-id='1']").click();
        //click on 'Continue Shopping' button
        cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click();

        //click add to card for second product
        cy.xpath("//div[@class='productinfo text-center']//a[@data-product-id='2']").click();
        //click on 'Continue Shopping' button
        cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click();

        //click on 'Cart' button
        cy.xpath("//header//a[@href='/view_cart']").click();

        //verify that cart page is displayed
        cy.xpath("//td[@class='cart_description']//a[contains(text(),'Blue Top')]").should('be.visible');
        cy.xpath("//td[@class='cart_description']//a[contains(text(),'Men Tshirt')]").should('be.visible');

        //verify the details of the products in cart page
        //price of the products
        cy.xpath("//tr[@id='product-1']//td[@class='cart_price']//p").should('contain.text', 'Rs. 500');
        cy.xpath("//tr[@id='product-2']//td[@class='cart_price']//p").should('contain.text', 'Rs. 400');
        //quantity of the products
        cy.xpath("//tr[@id='product-1']//td[@class='cart_quantity']//button").should('contain.text', '1');
        cy.xpath("//tr[@id='product-2']//td[@class='cart_quantity']//button").should('contain.text', '1');
        //total price of the products
        cy.xpath("//tr[@id='product-1']//td[@class='cart_total']").should('contain', 'Rs. 500');
        cy.xpath("//tr[@id='product-2']//td[@class='cart_total']").should('contain', 'Rs. 400');   

    })

})