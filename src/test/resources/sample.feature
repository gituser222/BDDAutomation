Feature: feeding a suckler cow

  Scenario Outline: feeding a suckler cow
    Given the cow weighs <weight> kg
    When we calculate the feeding requirements
    Then the energy should be <energy> MJ
    And the protein should be <protein> kg

    Examples: 
      | weight | energy | protein |
      |    450 |  26500 | "pro1"  |
      |    500 |  29500 | "vita"  |
      |    675 |  31500 | "carb"  |
