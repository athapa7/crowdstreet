Feature: CrowdStreet Registration Happy Path
I want to test the Crowsdstreet Registration Process

Scenario: Start the process
Given I am on the initial test page
When I click Create An Account
Then I should be redirected to the registration page

Scenario: Complete the Registration from and press Create An Account
Given I am on the registration page
When I Input all the correct information and accept the terms
And Click the Create An Account Button
Then I should be redirected 