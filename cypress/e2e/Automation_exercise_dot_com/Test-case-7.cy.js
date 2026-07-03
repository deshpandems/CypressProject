//Cypress Automation

describe('Verify Test Cases Page', () => {
    it('Verify Test Cases Page', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')
        //aaaddbdbqwdhqbdqj
        //click on 'Test Cases' button
        cy.xpath("//header//a[@href='/test_cases']").click();
        cy.url().should('eq', 'https://automationexercise.com/test_cases');
        cy.xpath("//section[@id='form']//h2/b").should('have.text', 'Test Cases');
    })
})