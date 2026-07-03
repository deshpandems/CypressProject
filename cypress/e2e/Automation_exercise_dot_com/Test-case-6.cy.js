//Cypress Automation

describe('Contact Us Form', () => {
    it('Contact Us Form', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //click on contact us button
        cy.xpath("//a[@href='/contact_us']").click();
        cy.xpath("//h2").should('contain', 'Get In Touch')

        // Enter name, email, subject and message
        cy.xpath("//input[@data-qa='name']").type('John Doe')
        const randomString = Math.random().toString(36).substring(2, 8);
         const email = `mahesh_${randomString}@gmail.com`;
        cy.xpath("//input[@data-qa='email']").type(email)
        cy.xpath("//input[@data-qa='subject']").type('Subject')
        cy.xpath("//textarea[@data-qa='message']").type('Message')

        // Upload file
        cy.xpath("//input[@name='upload_file']").selectFile('D:\\CypressProject\\cypress\\fixtures\\Tirupati_to_Parli.pdf', { force: true })

        // Click 'Submit' button
        cy.xpath("//input[@data-qa='submit-button']").click()

        // Click OK button
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Success! Your details have been submitted successfully.')
        })

        //verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.xpath("//div[@class='status alert alert-success']").should('contain', 'Success! Your details have been submitted successfully.')

        //launch home page by clicking on 'Home' button and verify that landed to home page successfully
        cy.xpath("//a[@class='btn btn-success']").click()
        cy.title().should('contain', 'Automation Exercise')
        
    })





})