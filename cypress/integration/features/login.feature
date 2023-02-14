Feature: User Login

  Scenario: User Login Success
    Given User visit login page
    When User login with valid credentials
    Then User should see display message login success
    And User should see logout button

  Scenario: User Login Failed Invalid Credentials
    Given User visit login page
    When User login with invalid credentials
    Then User should see display error message invalid credentials