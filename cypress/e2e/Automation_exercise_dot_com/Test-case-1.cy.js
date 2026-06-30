describe('Automation_exercise_Register_user', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })


    it('Register user', () => {

        // Verify that home page is visible successfully
        cy.title().should('contain', 'Automation Exercise')
    
        // Click on 'Signup / Login' button and verify 'New User Signup!' is visible
        cy.get('a[href="/login"]').click()
        cy.get('h2').should('contain', 'New User Signup!')
    })

})
