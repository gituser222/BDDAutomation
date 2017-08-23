Feature: BMI feature

  @regression
  Scenario Outline: Testing of BMI page
    Given user is on BMI page
    When user enters <height> in centimeters
    And user enters <weight> in Kilos
    And user clicks on Calculate button
    Then BMI is displayed is BMI
    Then Category is displayed in <Category>

    Examples: 
      | height | weight | Category  |
      |    180 |     66 | "Normal1" |
      |    160 |     80 | "Obesity" |
