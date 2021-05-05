describe('My First Test', () => {
    it('Visits The Godfather game!', () => {
        cy.visit('http://localhost:3000')
        
        // Login
        cy.get('.list-group-item').contains('Login').click()
        cy.wait(500)
        cy.get('.loginmodal-login-button').click()
        cy.get('.loginmodal-close-button').click()

        // Character
        cy.wait(500)
        cy.get('.menu-container').contains('Character').click()
        cy.wait(500)
        cy.url().should('include', '/character')
        cy.scrollTo('bottom', { duration: 1000 })
        cy.wait(500)
        cy.get('#add-atk').click()
        cy.wait(500)
        cy.get('#add-res').click()
        cy.wait(500)
        cy.get('#add-lck').click()
        cy.wait(500)
        cy.get('#add-rsl').click()
        cy.scrollTo('top', { duration: 1000 })



        // Missions
        cy.wait(500)
        cy.get('.menu-container').contains('Missions').click()
        cy.wait(500)
        cy.url().should('include', '/missions')

        // mission-list-button modal-close-button
        cy.get('.mission-list-button').contains('Fender').click()
        cy.wait(500)
        cy.get('.modal-close-button').click()
        cy.wait(250)
        cy.scrollTo('bottom', { duration: 1000 })
        cy.scrollTo('top', { duration: 1000 })

        // Duels
        cy.wait(500)
        cy.get('.menu-container').contains('Duels').click()
        cy.wait(500)
        cy.url().should('include', '/duels')

        cy.scrollTo('bottom', { duration: 1000 })
        cy.get('#queue-button').click()
        cy.wait(500)
        cy.get('#cancel-queue-button').click()
        cy.wait(250)
        cy.scrollTo('top', { duration: 1000 })

        // Gold
        cy.wait(500)
        cy.get('.menu-container').contains('Gold').click()
        cy.wait(250)
        cy.url().should('include', '/gold-shop')
        cy.scrollTo('bottom', { duration: 1000 })
        cy.scrollTo('top', { duration: 1000 })
    })
})
