Feature: User navigation

Scenario: The user can navigate through different pages
  Given I am on the Home route
  When I click the nav and click the Administrador
  Then I expect to be on the Administrador route