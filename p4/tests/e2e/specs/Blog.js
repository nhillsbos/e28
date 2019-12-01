describe('Blog', () => {
    it('Views on pages', () => {
        cy.visit('/')
        cy.contains('h1', 'Zhuangzi')

        cy.visit('/posts/')
        cy.contains('h1','Inner Chapters')

        cy.contains('h6','Find Chapter').click()
        
        cy.visit('/favs/')
        cy.contains('h1','Your Favorite Chapters')
    })
})