const { type } = require("os")

describe("Test", () => {
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
    it('Open payments', () => {
        cy.get('div[class="pageLayout__actions"]').click()
        cy.location('pathname').should('eq', '/payments/edit/')
    })
})