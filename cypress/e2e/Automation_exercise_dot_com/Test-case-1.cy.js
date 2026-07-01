describe('TC01 - Verify a new user can register successfully', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })

    it('User Registration', () => {

        // Verify that home page is visible successfully
        cy.title().should('contain', 'Automation Exercise')
        //abc
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

        // Click 'Delete Account' button and verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.xpath("//a[@href='/delete_account']").click()
        cy.xpath("//b[contains(text(),'Account Deleted!')]").should('be.visible')
        cy.xpath("//a[@data-qa='continue-button']").click()
        

    })

})