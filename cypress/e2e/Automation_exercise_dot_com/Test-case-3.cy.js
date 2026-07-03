//Cypress Automation
describe('TC03 - Login User with incorrect email and password', () => {
    let email;
    before(() => {
        const randomString = Math.random().toString(36).substring(2, 8);
        email = `mahesh_${randomString}@gmail.com`;
        cy.log(`Generated Email: ${email}`);
    })
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })

    it('Login with incorrect email and password', () => {
        // Verify that home page is visible successfully    
        cy.title().should('contain', 'Automation Exercise')
        
        // Click on 'Signup / Login' button and verify 'Login to your account' is visible
        cy.xpath("//a[@href='/login']").click();
        cy.xpath("//h2").should('contain', 'Login to your account')

        // Enter incorrect email address and password
        cy.xpath("//input[@data-qa='login-email']").type(email)
        cy.fixture('registerUser').then((user) => {
        cy.xpath("//input[@data-qa='login-password']").type(user.password)

        // Click on 'Login' button
        cy.xpath("//button[@data-qa='login-button']").click()

        // Verify error 'Your email or password is incorrect!' is visible
        cy.xpath("//p[contains(text(),'Your email or password is incorrect!')]").should('be.visible')

        })
    })

})