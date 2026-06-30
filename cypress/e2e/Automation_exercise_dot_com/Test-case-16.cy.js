describe('Place Order: Login before Checkout', () => {
    it('Place Order: Login before Checkout', () => {
        //verify that home page is visible successfully
        cy.visit('https://automationexercise.com')
        cy.title().should('contain', 'Automation Exercise')

        // Click on 'Signup / Login' button and verify 'New User Signup!' is visible
        cy.xpath("//a[@href='/login']").click();
        cy.xpath("//h2").should('contain', 'Login to your account')
 
        cy.fixture('registerUser').then((user) => 
        {
            cy.xpath("//input[@data-qa='login-email']").type(user.email)
            cy.xpath("//input[@data-qa='login-password']").type(user.password)
        })

        // Click on 'Login' button
        cy.xpath("//button[@data-qa='login-button']").click()

        // Verify that 'Logged in as username' is visible
        cy.xpath("//a[contains(text(),'Logged in as')]").should('be.visible')

        cy.get('.features_items .product-image-wrapper').eq(0).contains('Add to cart').click();
        cy.contains('Continue Shopping').click();

        cy.get('.features_items .product-image-wrapper').eq(1).contains('Add to cart').click();
        cy.contains('Continue Shopping').click();

        //click on 'Cart' button
        cy.xpath("//header//a[@href='/view_cart']").click();
        //click on 'Proceed To Checkout' button
        cy.xpath("//a[@class='btn btn-default check_out']").click();

        //enter message in comment text area and click 'Place Order' button
        cy.xpath("//textarea[@name='message']").type('Please deliver between 9 AM to 5 PM');

        //place order
        cy.xpath("//a[@class='btn btn-default check_out']").click();

        //Payment details
        cy.xpath("//input[@data-qa='name-on-card']").type('John Doe');
        cy.xpath("//input[@data-qa='card-number']").type('1234 5678 9012 3456');
        cy.xpath("//input[@data-qa='cvc']").type('123');
        cy.xpath("//input[@data-qa='expiry-month']").type('12');
        cy.xpath("//input[@data-qa='expiry-year']").type('2029');
        cy.xpath("//button[@data-qa='pay-button']").click();

        //verify success message 'Your order has been placed successfully!'
        cy.xpath("//p[contains(text(),'Congratulations! Your order has been confirmed!')]").should('be.visible');

        // Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.xpath("//a[@href='/delete_account']").click()
        cy.xpath("//b[contains(text(),'Account Deleted!')]").should('be.visible')
        cy.xpath("//a[@data-qa='continue-button']").click()    

    })
})