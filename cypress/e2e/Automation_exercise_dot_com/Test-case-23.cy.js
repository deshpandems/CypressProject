describe('Verify address details in checkout page', () => {
    it('Verify address details in checkout page', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        // Click on 'Signup / Login' button and verify 'New User Signup!' is visible
        cy.xpath("//a[@href='/login']").click();
        cy.xpath("//h2").should('contain', 'New User Signup!')

        // Enter name and email address and click 'Signup' button
        cy.xpath("//input[@placeholder='Name']").type('John Doe')
        const randomString = Math.random().toString(36).substring(2, 8);
        const email = `mahesh_${randomString}@gmail.com`;
        cy.xpath("//input[@data-qa='signup-email']").type(email)
        cy.xpath("//button[@data-qa='signup-button']").click()

        //Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.xpath("//b[contains(text(),'Enter Account Information')]").should('be.visible')

        cy.fixture('registerUser').then((user) => {   

        //Select gender
        cy.xpath("//input[@id='id_gender1']").check()
        cy.xpath("//input[@id='password']").type(user.password)

        // Select date of birth
        cy.xpath("//select[@id='days']").select(user.day)
        cy.xpath("//select[@id='months']").select(user.month)
        cy.xpath("//select[@id='years']").select(user.year)

        //Address Information
        cy.xpath("//input[@id='first_name']").type(user.firstName)
        cy.xpath("//input[@id='last_name']").type(user.lastName)
        cy.xpath("//input[@id='company']").type(user.company)
        cy.xpath("//input[@id='address1']").type(user.address1)
        cy.xpath("//input[@id='address2']").type(user.address2)
        cy.xpath("//select[@id='country']").select(user.country)
        cy.xpath("//input[@id='state']").type(user.state)
        cy.xpath("//input[@id='city']").type(user.city)
        cy.xpath("//input[@id='zipcode']").type(user.zipcode)
        cy.xpath("//input[@id='mobile_number']").type(user.mobileNumber)
        })
        // Click 'Create Account' button
        cy.xpath("//button[@data-qa='create-account']").click()

        // Verify that 'ACCOUNT CREATED!' is visible and click 'Continue' button
        cy.xpath("//b[contains(text(),'Account Created!')]").should('be.visible')
        cy.xpath("//a[@data-qa='continue-button']").click()
        
        //verify that 'Logged in as username' is visible
        cy.xpath("//a[contains(text(),'Logged in as')]").should('be.visible')

        cy.get('.features_items .product-image-wrapper').eq(0).contains('Add to cart').click();
        cy.contains('Continue Shopping').click();

        cy.get('.features_items .product-image-wrapper').eq(1).contains('Add to cart').click();
        cy.contains('Continue Shopping').click();

        //click on 'Cart' button
        cy.xpath("//header//a[@href='/view_cart']").click();

        //verify that cart page is displayed
        cy.location('href').should('eq', 'https://automationexercise.com/view_cart');

        //click on 'Proceed To Checkout' button
        cy.xpath("//a[@class='btn btn-default check_out']").click();
        cy.fixture('registerUser').then((user) => {
        
        //verifying the delivery address and billing address details are as per registration
        cy.xpath("//ul[@id='address_delivery']").should('contain.text', user.address1).and('contain.text', user.city).and('contain.text', user.state).and('contain.text', user.zipcode).and('contain.text', user.country);
        cy.xpath("//ul[@id='address_invoice']").should('contain.text', user.address1).and('contain.text', user.city).and('contain.text', user.state).and('contain.text', user.zipcode).and('contain.text', user.country);

        })

        // Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.xpath("//a[@href='/delete_account']").click()
        cy.xpath("//b[contains(text(),'Account Deleted!')]").should('be.visible')
        cy.xpath("//a[@data-qa='continue-button']").click()

    })
})