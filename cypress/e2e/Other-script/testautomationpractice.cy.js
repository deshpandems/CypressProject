describe('testautomationpractice', () => {

beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

it('Verify the title of page', () => {
    cy.title().should('contain', 'Automation Testing Practice')
  })
  
it('Filling the form', () => {
    //textbox
    cy.xpath('//input[@id="name"]').click().type('John Doe')
    cy.xpath('//input[@id="email"]').click().type('johndoe@example.com')
    cy.xpath('//input[@id="phone"]').click().type('1234567890')
    cy.xpath('//textarea[@id="textarea"]').click().type('This is a test address.')
    //checkbox and radio button
    cy.xpath('//input[@id="male"]').check()
    cy.xpath('//input[@id="sunday"]').click()
    //select dropdown
    cy.xpath("//select[@id='country']").select('France')
    cy.xpath("//select[@id='colors']").select('Yellow')
    cy.xpath("//select[@id='animals']").select('Lion')
    //date picker
    cy.xpath("//input[@id='datepicker']").click().type('12/31/2023')
    cy.xpath("//input[@id='txtDate']").click({ force: true }).type("12/31/2023", { force: true })    
    cy.xpath("//input[@id='start-date']").type("2024-06-25")
    cy.xpath("//input[@id='end-date']").type("2026-06-25")
    //file upload
    cy.xpath("//input[@id='singleFileInput']").selectFile('D:\\CypressProject\\cypress\\fixtures\\Tirupati_to_Parli.pdf')
    cy.xpath("//input[@id='singleFileInput']").click()
  })

})