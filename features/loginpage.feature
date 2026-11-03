Feature: Admin Login
  As an admin,
  I want to create new employees and user accounts,
  So that I can manage employee and user access to the application.

  Scenario: Verify admin login and logout with valid credentials
    Given I open the browser and navigate to the admin login URL "https://qfundxqa1.qfund.net/cc/adminIndex.do"
    Then I should see the admin login page
    When I enter the username "qfundadfs"
    And I enter the password "1234"
    And I click the Submit button
    Then I should see the admin dashboard
    When I click the Logout button
    Then I should see the admin login page
