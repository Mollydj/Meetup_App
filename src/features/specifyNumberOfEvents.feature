Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
  Given the page had loaded
  When the user hasnt specified the number events per page
  Then the default amount of items will appear on a page

Scenario: User can change the number of events they want to see
  Given user opened the app
  When the user specified the number of events
  Then the maximum of specified number of events will be displayed

