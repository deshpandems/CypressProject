describe('Search Products and Verify Cart After Login', () => {
    it('Search for a product, add to cart, and verify cart after login', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //click on 'Products' button
        cy.xpath("//header//a[@href='/products']").click();
        cy.url().should('eq', 'https://automationexercise.com/products');
        //verify all products are visible
        cy.xpath('//div[@class="features_items"]//h2').should('be.visible');

        //search product and verify that result is visible
        cy.xpath("//input[@id='search_product']").type('Tshirt');
        cy.xpath("//button[@id='submit_search']").click();
        //verify 'SEARCHED PRODUCTS' is visible
        cy.xpath("//div[@class='col-sm-9 padding-right']//h2[text()='Searched Products']").should('be.visible');
        
        //add product to cart
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click();

        //click on cart button
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        //verify that cart page is displayed
        cy.url().should('eq', 'https://automationexercise.com/view_cart');
        //verify the prodducst
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();

        //click on 'Signup / Login' button
        cy.xpath("//ul[@class='nav navbar-nav']//a[@href='/login']").click()
        cy.xpath("//h2").should('contain', 'Login to your account')

        // Enter correct email address and password
        cy.fixture('registerUser').then((user) => {
        cy.xpath("//input[@data-qa='login-email']").type(user.email)
        cy.xpath("//input[@data-qa='login-password']").type(user.password)
        })
        // Click on 'Login' button
        cy.xpath("//button[@data-qa='login-button']").click()

        //click on cart button
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        //verify that cart page is displayed
        cy.url().should('eq', 'https://automationexercise.com/view_cart');



    })
})