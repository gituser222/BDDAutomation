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
        "\"Normal\""
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
  "name": "Category is displayed in \"Normal\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BMIPageSteps.user_is_on_BMI_page()"
});
formatter.result({
  "duration": 6771332414,
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
  "duration": 172138125,
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
