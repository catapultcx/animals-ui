// assuming the cat id is not changing on cat page url
// otherwise would have clicked view or used cypress mock fixture
describe('test all cats page', () => {
    before(() => {
        cy.visit('/cats/7bac379d-df55-454e-8bb8-43a4917a6ab6')
    })
    it('test cat name and description', () => {
        cy.xpath("//tbody[@class='govuk-table__body']/tr[1]/th").should('have.text', 'Name')
        cy.xpath("//tbody[@class='govuk-table__body']/tr[1]/td").should('have.text', 'Garfield')
        cy.xpath("//tbody[@class='govuk-table__body']/tr[2]/th").should('have.text', 'Description')
        cy.xpath("//tbody[@class='govuk-table__body']/tr[2]/td").should('have.text', 'Lazy cat')
    })
})