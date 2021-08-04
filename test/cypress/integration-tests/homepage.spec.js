describe('test homepage', () =>{
    before(() =>{
        cy.visit('')
    })
    it('test homepage elements', () =>{
        cy.get('h1').should('have.text', 'Welcome to the GOV.UK service')
            .and('have.class', 'govuk-heading-xl')
        cy.get('h2').contains('Sign in to GOV.UK online services')
            .and('have.class', 'govuk-heading-l')
        cy.xpath("//a[@class='govuk-button' and text()='See Cats']").should('be.visible')
            .and('have.attr', 'href', '/cats')
        cy.xpath("//a[@class='govuk-button' and text()='Sign in']").should('be.visible')
            .and('have.attr', 'href', '/login')
        cy.xpath("//ul[contains(@class,'govuk-list')]/li[1]/a").should('have.text','Living in the UK')
            .and('have.attr', 'href')
        cy.xpath("//ul[contains(@class,'govuk-list')]/li[2]/a").should('have.text','Using GOV.UK online')
            .and('have.attr', 'href')
    })

    it('clicking cats button opens cats page', () =>{
        cy.xpath("//a[@class='govuk-button' and text()='See Cats']").click()
        cy.url().should(
            'be.equal',
            `${Cypress.config("baseUrl")}/cats`)
        cy.get('h1').should('have.text', 'Cats')
    })
})