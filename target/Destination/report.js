$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BMIPage.feature");
formatter.feature({
  "line": 1,
  "name": "BMI feature",
  "description": "",
  "id": "bmi-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testing of BMI page",
  "description": "",
  "id": "bmi-feature;testing-of-bmi-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on BMI page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \u003cheight\u003e in centimeters",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \u003cweight\u003e in Kilos",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "BMI is displayed is BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Category is displayed in \u003cCategory\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "bmi-feature;testing-of-bmi-page;",
  "rows": [
    {
      "cells": [
        "height",
        "weight",
        "Category"
      ],
      "line": 13,
      "id": "bmi-feature;testing-of-bmi-page;;1"
    },
    {
      "cells": [
        "180",
        "66",
        "\"Normal1\""
      ],
      "line": 14,
      "id": "bmi-feature;testing-of-bmi-page;;2"
    },
    {
      "cells": [
        "160",
        "80",
        "\"Obesity\""
      ],
      "line": 15,
      "id": "bmi-feature;testing-of-bmi-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Testing of BMI page",
  "description": "",
  "id": "bmi-feature;testing-of-bmi-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on BMI page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters 180 in centimeters",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters 66 in Kilos",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "BMI is displayed is BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Category is displayed in \"Normal1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BMIPageSteps.user_is_on_BMI_page()"
});
formatter.result({
  "duration": 6299146944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 12
    }
  ],
  "location": "BMIPageSteps.user_enters_in_centimeters(String)"
});
formatter.result({
  "duration": 117989354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "66",
      "offset": 12
    }
  ],
  "location": "BMIPageSteps.user_enters_in_Kilos(String)"
});
formatter.result({
  "duration": 75394126,
  "status": "passed"
});
formatter.match({
  "location": "BMIPageSteps.user_clicks_on_Calculate_button()"
});
formatter.result({
  "duration": 83419153,
  "status": "passed"
});
formatter.match({
  "location": "BMIPageSteps.BMI_is_displayed_is_BMI()"
});
formatter.result({
  "duration": 44795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Normal1",
      "offset": 26
    }
  ],
  "location": "BMIPageSteps.Category_is_displayed_in(String)"
});
formatter.result({
  "duration": 35703712,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cNormal[1]\u003e but was:\u003cNormal[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat runnerPackage.BMIPageSteps.Category_is_displayed_in(BMIPageSteps.java:69)\r\n\tat ✽.Then Category is displayed in \"Normal1\"(BMIPage.feature:10)\r\n",
  "status": "failed"
});
formatter.write("Testing of BMI pagefailed");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 500862612,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Testing of BMI page",
  "description": "",
  "id": "bmi-feature;testing-of-bmi-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on BMI page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters 160 in centimeters",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters 80 in Kilos",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "BMI is displayed is BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Category is displayed in \"Obesity\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BMIPageSteps.user_is_on_BMI_page()"
});
formatter.result({
  "duration": 5335594243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 12
    }
  ],
  "location": "BMIPageSteps.user_enters_in_centimeters(String)"
});
formatter.result({
  "duration": 121493130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 12
    }
  ],
  "location": "BMIPageSteps.user_enters_in_Kilos(String)"
});
formatter.result({
  "duration": 76337796,
  "status": "passed"
});
formatter.match({
  "location": "BMIPageSteps.user_clicks_on_Calculate_button()"
});
formatter.result({
  "duration": 81425589,
  "status": "passed"
});
formatter.match({
  "location": "BMIPageSteps.BMI_is_displayed_is_BMI()"
});
formatter.result({
  "duration": 16638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Obesity",
      "offset": 26
    }
  ],
  "location": "BMIPageSteps.Category_is_displayed_in(String)"
});
formatter.result({
  "duration": 33934972,
  "status": "passed"
});
formatter.after({
  "duration": 75698303,
  "status": "passed"
});
});