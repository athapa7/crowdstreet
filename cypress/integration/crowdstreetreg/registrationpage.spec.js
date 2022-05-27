import {And,Given,Then,When} from "cypress-cucumber-preprocessor/steps";
import registrationpage from "../../PageObject/RegistrationPage"

let fname = "Bruce"
let lName = "Wayne"
let password = "1mBatm@n"
let email = registrationpage.randomemail()+"@gmail.com"

Given('I am on the registration page',()=>{
    registrationpage.navigateto()
})

When('I Input all the correct information and accept the terms',()=>{
    registrationpage.fNameLName(fname,lName)
    registrationpage.passwordConfirm(password)
    registrationpage.email(email)
    registrationpage.ainvestor()
    registrationpage.terms()
    registrationpage.captcha()
})

And('Click the Create An Account Button',()=>{
    registrationpage.submit()
})

Then('I should be redirected',()=>{
    registrationpage.checkName(fname)
})
