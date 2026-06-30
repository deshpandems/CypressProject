describe('Register User with existing email', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })

    it('Register User with existing email', () => {
        // Verify that home page is visible successfully
        cy.title().should('contain', 'Automation Exercise')
    
        // Click on 'Signup / Login' button and verify 'New User Signup!' is visible
        cy.xpath("//a[@href='/login']").click();
        cy.xpath("//h2").should('contain', 'New User Signup!')

        // Enter name and email address and click 'Signup' button
        cy.xpath("//input[@placeholder='Name']").type('John Doe')
        cy.xpath("//input[@data-qa='signup-email']").type('mahesh_v0u5x6@gmail.com')
        cy.xpath("//button[@data-qa='signup-button']").click()
        cy.xpath("//p[contains(text(),'Email Address already exist!')]").should('be.visible')

    })




})