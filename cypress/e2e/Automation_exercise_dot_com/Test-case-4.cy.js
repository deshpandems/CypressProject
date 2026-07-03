//Cypress Automation
describe('TC04 - Logout the user', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    });

    it('Logout the user', () => {
            // Verify that home page is visible successfully    
            cy.title().should('contain', 'Automation Exercise')

            // Click on 'Signup / Login' button and verify 'New User Signup!' is visible
            cy.xpath("//a[@href='/login']").click();
            cy.xpath("//h2").should('contain', 'Login to your account')

            cy.fixture('registerUser').then((user) => {
            cy.xpath("//input[@data-qa='login-email']").type('mahesh_v0u5x6@gmail.com')
            cy.fixture('registerUser').then((user) => {
                cy.xpath("//input[@data-qa='login-password']").type(user.password)
                
                // Click 'Login' button
                cy.xpath("//button[@data-qa='login-button']").click()

                //verify that 'Logged in as username' is visible
                cy.xpath("//a[contains(text(),'Logged in as')]").should('be.visible')

                // Click on 'Logout' button
                cy.xpath("//a[contains(text(),'Logout')]").click()
            })
            // Verify that user is navigated to login page
            cy.url().should('include', '/login')
        })
})
})