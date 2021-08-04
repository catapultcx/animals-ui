describe('testing adding a new cat', () => {
    let catCount
    before(() => {
        cy.visit('/cats')
        catCount = cy.get('.govuk-table__body').find('tr')
            .then(listing => {
                catCount = Cypress.$(listing).length;
            })
    })
    it('clicking on add a cat button', () => {
        cy.get('.govuk-button').click()
        cy.url().should(
            'be.equal',
            `${Cypress.config("baseUrl")}/cats/add`)
    })
    it('submitting new cat details', () => {
        // generating random cat name & description in case there is a constraint on same name
        const uuid = () => Cypress._.random(0, 1e6)
        const random_cat_name = uuid()
        cy.get('#name').type(random_cat_name)
        cy.get('#description').type(`random cat name ${random_cat_name}`)
        cy.xpath("//button[@class='govuk-button' and @type='submit']").click()
        // should be redirected to all cats page
        cy.url().should(
            'be.equal',
            `${Cypress.config("baseUrl")}/cats`)
        // cat count should increase by one
        cy.get('.govuk-table__body').find('tr').should('have.length', catCount+1)
        // new cat list should contain the new cat name
        cy.contains(random_cat_name)
    })
})