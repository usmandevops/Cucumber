Feature: Key2Act Login Feature

Scenario: Key2Act Login Scenario

Given User is already on LoginPage
When title of login page is BoB
Then User enters username and password
Then user  clicks on login button
Then User is on My Account
And User log out