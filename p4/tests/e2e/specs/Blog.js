describe('Blog', () => {
    it('Views pages', () => {
        
        let post = {
            title: 'Wandering Far and Unfettered',
            author: 'Zhuangzi',
            id: 1
        };
        
        // homepage
        cy.visit('/')
        cy.contains('h1', 'Zhuangzi')

        // posts page lists all posts initially 
        cy.visit('/posts/')
        cy.contains('h1', 'Inner Chapters')
        cy.get('[data-test="post-link"]').should('have.length', 7)
        
        // revealing quick filter
        cy.get('h6').first().click()
        cy.get('#postfilternav').should('be.visible')
        cy.contains('#postfilternav','Chapter ' + post.id)

        
        // blog post
        cy.contains('[data-test="post-link"]', post.title)
        cy.get('h3').should('be.visible')

        // user uses filter to show only the first chapter
        cy.get('#navfilterbtn-' + post.id).click()
        cy.get('[data-test="post-link"]').should('have.length', 1)

        // single post page
        cy.contains('h3', post.title).click()
        //test fav btn
        cy.contains('div','Add to Favorites\' List').click()
        // add alert is active
        cy.get('#addAlertBtn').should('be.visible')
        // testing next and prev btns
        cy.get('#nextPostBtn').click()
        cy.get('#prevPostBtn').click()
        cy.get('#nextPostBtn').click()
        cy.contains('div','Add to Favorites\' List').click()
        //testing fav btns
        cy.contains('.nav-item','Favorite Posts').click()
        cy.get('li.favlistitem').should('have.length', 2)

        cy.contains('button','X').click()
        cy.get('li.favlistitem').should('have.length', 1)

        cy.contains('h4','Equalizing Assessments of Things').click()
        cy.contains('div','Remove from Favorites\' List').should('be.visible')

        cy.contains('div','Remove from Favorites\' List').click()
        cy.contains('.nav-item','Favorite Posts').click()
        cy.get('li.favlistitem').should('have.length', 0)

        //form
        let myinput = {
            name: 'Cool Guy',
            namel: "Cool cool cool cool cool cool cool cool cool",
            email: 'mycooladdr@cool.cool',
            emailerr: 'blahas',
            comments: 'These are my comments. Read them.',
            commentser: 'These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.These are my comments. Read them.'
        };

        cy.visit('/contact');
        cy.get('[data-test="name-input"]').type(myinput.namel);
        cy.get('[data-test="email-input"]').type(myinput.emailerr);
        cy.get('[data-test="comments-input"]').type(myinput.commentser);
        cy.get('[data-test="error-msg"]').should('be.visible');
        cy.get('[data-test="submit-btn"]').click();
        cy.get('[data-test="name-input"]').type(myinput.namel).clear();
        cy.get('[data-test="email-input"]').type(myinput.emailerr).clear();
        cy.get('[data-test="comments-input"]').type(myinput.commentser).clear();
        cy.get('[data-test="name-input"]').type(myinput.name);
        cy.get('[data-test="email-input"]').type(myinput.email);
        cy.get('[data-test="comments-input"]').type(myinput.comments);
        cy.get('[data-test="submit-btn"]').click();
        cy.get('[data-test="thankyou-msg"]').should('be.visible');
    })
})