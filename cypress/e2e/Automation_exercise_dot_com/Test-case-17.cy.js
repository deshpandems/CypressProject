//Cypress Automation

describe('Remove Products From Cart', () => {
    it('Remove Products From Cart', () => {
        //verify that home page is visible successfully
        cy.visit('https://automationexercise.com')
        cy.title().should('contain', 'Automation Exercise')

        cy.get('.features_items .product-image-wrapper').eq(0).contains('Add to cart').click();
        cy.contains('Continue Shopping').click();

        cy.get('.features_items .product-image-wrapper').eq(1).contains('Add to cart').click();
        cy.contains('Continue Shopping').click();

        //click on 'Cart' button
        cy.xpath("//header//a[@href='/view_cart']").click();

        //remove product from cart
        cy.xpath("//td[@class='cart_delete']//a[@data-product-id='1']").click();
        cy.xpath("//td[@class='cart_delete']//a[@data-product-id='2']").click();

        //verify that cart is empty
        cy.xpath("//span[@id='empty_cart']//b[contains(text(),'Cart is empty!')]").should('be.visible');

        


    })
})  