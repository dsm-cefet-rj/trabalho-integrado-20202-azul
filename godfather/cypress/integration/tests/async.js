describe('My First Test', () => {
    it('Visits The Godfather game!', () => {
        cy.visit('http://localhost:3000')
        
        // Login
        cy.get('.list-group-item').contains('Login').click().then(() =>{
            cy.get('.loginmodal-login-button')
            .click().then(() => {
                cy.get('.loginmodal-close-button').click()
            })
        })
        
        
    })
})
