

describe("Test2", () => {
    it('Visiting site and Sign in', () => {
        cy.visit('https://finance.dev.fabrique.studio/', {
            auth: {
                username: 'fabrique',
                password: 'fabrique'
            }
        })
        cy.get('input[type="email"]').type('admin@admin.ad')
        cy.get('input[type="password"]').type('admin')
        cy.get('div[class="button__content"]').click()
    })
    it('sequrity title', () => {
        cy.get('div[class="pageLayout__actions"]').click()
        cy.contains('За что')

    })
})