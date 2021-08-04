describe('testing all cats page', () => {
    before(() => {
        cy.visit('/cats')
    })
    it('test all cats page elements', () => {
        cy.get('.govuk-button').should('have.text', 'Add a Cat')
            .and('have.attr', 'href', '/cats/add')
        cy.get('.govuk-table').should('be.visible')
        cy.xpath("//thead[@class='govuk-table__head']/tr[@class='govuk-table__row']/th[1]").should('have.text', 'Name')
        cy.xpath("//thead[@class='govuk-table__head']/tr[@class='govuk-table__row']/th[2]").should('have.text', 'Description')
    })
    it('test names and description text', () => {
        //checking Tiger has description of large cat and has a view link
        cy.xpath("//tr[@class='govuk-table__row']//th[@class='govuk-table__header' and text()='Tiger']/following-sibling::td[1]").should('have.text', 'Large cat')
        cy.xpath("//tr[@class='govuk-table__row']//th[@class='govuk-table__header' and text()='Tiger']/following-sibling::td[2]/a").should('have.text', 'View')
            .and('have.class', 'govuk-link')
            .and('have.attr', 'href', '/cats/0ad0f2a7-e37f-42fd-bd84-f27609c9e26e')
    })
    it('clicking view opens cat page', () => {
        //clicking Bili cat and checking its description
        cy.xpath("//tr[@class='govuk-table__row']//th[@class='govuk-table__header' and text()='Bili']/following-sibling::td[2]/a").click()
        cy.url().should(
            'be.equal',
            `${Cypress.config("baseUrl")}/cats/97ace336-7edb-471e-a015-da9cc0d821b4`)
        cy.get('h1').should('have.text', 'Cat')
    })
})
