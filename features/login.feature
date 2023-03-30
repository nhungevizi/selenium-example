Feature: Login Jira
  As a user I want to login to my Jira account  

  @login
  Scenario: Login_01: Verify that user can login in with valid user name and password
    Given User is on login page
    When User enter username as "<email>"
    When User click button continue login
    When User enter password as "<password>"
    When User click button login
    Then User navigate to homepage

    Examples: 
      | email               | password |
      | nhung.van@evizi.com | nhung@98 |