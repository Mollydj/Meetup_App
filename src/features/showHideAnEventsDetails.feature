Feature: Show/Hide an events details

Scenario: An event element is collapsed by default.
    Given user opens the app
    When the user hasn't clicked on anything
    Then the user should see the list of collapsed events

Scenario: User can expand an event to see its details.
    Given the main page is open
    When a user clicks the details button
    Then the user should see more details of the event

Scenario: User can collapse an event to hide its details
    Given the event details are showing
    When a user clicks the details button
    Then then the use should not see the event details