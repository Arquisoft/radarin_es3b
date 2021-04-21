Feature: Nav display
  Any user before being logged in
  should see the nav menu when 
  the button is clicked

  Scenario: User opens nav
    When I click the button
    Then I expect to see the nav menu