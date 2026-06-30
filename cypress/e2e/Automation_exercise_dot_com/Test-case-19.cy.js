describe('View Category Products', () => {
    it('View Category Products', () => {
        //verify that home page is visible successfully
        cy.visit('https://automationexercise.com')
        cy.title().should('contain', 'Automation Exercise')

        //click on 'Products' button
        cy.xpath("//header//a[@href='/products']").click();
        cy.url().should('eq', 'https://automationexercise.com/products');

        //verify the brand list at left side
        cy.xpath('//a[@href="/brand_products/Polo"]')
        cy.xpath("//a[@href='/brand_products/Polo']").should('contain', 'Polo');
        cy.xpath("//a[@href='/brand_products/H&M']").should('contain', 'H&M');

        //click Polo
        cy.xpath('//a[@href="/brand_products/Polo"]').click();
        cy.xpath('//div[@class="features_items"]//h2[contains(text(),"Brand - ")]')

        //click H&M
        cy.xpath('//a[@href="/brand_products/H&M"]').click();
        cy.xpath('//div[@class="features_items"]//h2[contains(text(),"Brand - ")]');
    })
})