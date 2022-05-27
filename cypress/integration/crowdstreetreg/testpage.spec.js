import { Given,Then,When} from "cypress-cucumber-preprocessor/steps";
import testsite from "../../PageObject/TestSite"

Given('I am on the initial test page',()=>{
    testsite.navigateto()
})

When('I click Create An Account',()=>{
    testsite.clickCreate()
})

Then('I should be redirected to the registration page',()=>{
    testsite.registrationPage()
})