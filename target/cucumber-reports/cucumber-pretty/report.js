$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/UKarim/eclipse-workspace/K2ACucumber/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Key2Act Login Feature",
  "description": "",
  "id": "key2act-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Key2Act Login Scenario",
  "description": "",
  "id": "key2act-login-feature;key2act-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is BoB",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user  clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User log out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 12375508500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_BoB()"
});
formatter.result({
  "duration": 5934200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 296622900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 56111500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_My_Account()"
});
formatter.result({
  "duration": 2751000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_log_out()"
});
formatter.result({
  "duration": 606755600,
  "status": "passed"
});
});