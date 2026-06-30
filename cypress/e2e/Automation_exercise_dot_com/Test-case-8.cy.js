describe('Verify All Products and product detail page', () => {

    it('Verify All Products and product detail page', () => {
        // Verify that home page is visible successfully
        cy.visit('https://automationexercise.com/')
        cy.title().should('contain', 'Automation Exercise')

        //click on 'Products' button
        cy.xpath("//header//a[@href='/products']").click();
        cy.url().should('eq', 'https://automationexercise.com/products');

        //click on 'View Product' of first product
        cy.xpath("//a[@href='/product_details/1']").click();
        cy.url().should('eq', 'https://automationexercise.com/product_details/1');

        //Verify that product detail is opened
        cy.xpath("//h2").should('contain', 'Blue Top');
        cy.xpath('//p[contains(text(), "Category: Women > Tops")]').should('exist');
        cy.xpath("//p[contains(., 'Brand: Polo')]").should('be.visible');
        cy.xpath("//span[contains(text(),'Rs. 500')]").should('be.visible');
        cy.xpath("//b[text()='Availability:']/parent::p").should('contain', 'In Stock');
        cy.xpath("//b[text()='Condition:']/parent::p").should('contain', 'New');

    })
    })
