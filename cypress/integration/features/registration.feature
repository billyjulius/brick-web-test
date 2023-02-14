Feature: User Registration

#   Scenario: User Registration Success
#     Given User visit register page
#     When User input valid registration data
#     Then User should see display message registration success

  Scenario: User Registration Failed Password Not Matched
    Given User visit register page
    When User input registration data invalid confirmation password
    Then User should see display error message password not matched
