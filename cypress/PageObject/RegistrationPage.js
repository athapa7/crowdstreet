class RegistrationPage{

    navigateto(){
        cy.visit('https://test.crowdstreet.com/invexp/accounts/create-account')
    }

    fNameLName(fName,LName){
        cy.get('[data-testid="firstName"]').type(fName)
        cy.get('[data-testid="lastName"]').type(LName)
    }

    passwordConfirm(password){
        cy.get('[data-testid="password"]').type(password)
        cy.get('[data-testid="confirm-password"]').type(password)
    }

    ainvestor(){
        cy.get('#accreditedYes').click()
    }

    email(email){
        cy.get('#email').type(email)
    }

    terms(){
        cy.get('#hasAgreedTos').click()
    }

    captcha(){          
                      
            cy.get('iframe[title="reCAPTCHA"]').then($element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find('#recaptcha-anchor').click()
         })
      
    }

    submit(){
        cy.get('[data-testid="submit-button"]').click()
    }

    checkName(fName){
        cy.get('.user-button.css-ebtv95>abbr').should('contain','Hi ' + fName)
    }

    randomemail() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }
}   

const registrationpage = new RegistrationPage()
export default registrationpage