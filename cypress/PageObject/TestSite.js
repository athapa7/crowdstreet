class TestSite{

    navigateto(){
        cy.visit('https://test.crowdstreet.com/')
    }

    clickCreate(){
        cy.get('.css-108j06w > .join-button').click({force: true})
    }

    registrationPage(){
        cy.url().should('eq','https://test.crowdstreet.com/invexp/accounts/create-account')
    }
}

const testsite = new TestSite()
export default testsite