describe('View Category Products', () => {
    it('View Category Products', () => {
        //verify that home page is visible successfully
        cy.visit('https://automationexercise.com')
        cy.title().should('contain', 'Automation Exercise')
        
        ///verify that categories are visible on left side bar
        cy.xpath("//div[@class='left-sidebar']//h2[contains(text(),'Category')]").should('be.visible');
        //verify on women category page and click on dress
        cy.xpath('//a[@href="#Women"]').click();
        cy.xpath('//a[@href="/category_products/1"]').click();

        //verify that category page is displayed and confirm text 'WOMEN -'
        cy.xpath('//div[@class="features_items"]//h2[contains(text(),"Women -")]').should('be.visible');

        //click and navigate to mens category page
        cy.xpath('//a[@href="#Men"]').click();
        cy.xpath('//a[@href="/category_products/3"]').click();
        cy.xpath('//div[@class="features_items"]//h2[contains(text(),"Men -")]').should('be.visible');

    })
})