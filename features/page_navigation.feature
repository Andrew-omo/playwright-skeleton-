@smokeTests
Feature: D365 Sales page navigation

  Scenario: As a user I should be able to access D365 Sales pages
    Given I am able to login to cm
    And I navigate to the Accounts page
    And I should be in the account page
    And I navigate to the Contacts page
    And I should be in the contact page
    When I navigate to the Dashboard page
    Then I should be in the dashboard page
    And I navigate to the Calendar page
    And I should be in the appointment page
    And I navigate to the Tasks page
    And I should be in the task page
    When I navigate to the Leads page
    Then I should be in the lead page
    And I navigate to the Opportunities page
    And I should be in the Opportunity page
    And I navigate to the Forecasts page
    And I should be in the Forecast page
    When I navigate to the Sales accelerator page
    Then I should be in the AcceleratedSales page 
    Then The user is able to Sign out of this account 