$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featurefiles/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#StoryType\u003dWEB"
    },
    {
      "line": 2,
      "value": "#Owner\u003dejagruti"
    },
    {
      "line": 3,
      "value": "#CreationDate\u003d22nd Mar 2019"
    },
    {
      "line": 4,
      "value": "#Author\u003dGaurav"
    }
  ],
  "line": 7,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 6,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 1704101500,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "User will be on application login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user open \"Chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters url \"http://www.gcrit.com/build3/admin/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will be on Applications login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 11
    }
  ],
  "location": "Login.openBrowser(String)"
});
formatter.result({
  "duration": 6763634100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcrit.com/build3/admin/login",
      "offset": 17
    }
  ],
  "location": "Login.enterURL(String)"
});
formatter.result({
  "duration": 3391261200,
  "status": "passed"
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "duration": 1401888300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify login functionality by passing valid credentials",
  "description": "",
  "id": "login-feature;verify-login-functionality-by-passing-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@SmokeTest"
    },
    {
      "line": 14,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user enters username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters password as \"admin@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user will be on application\u0027s home page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    }
  ],
  "location": "Login.enterUserName(String)"
});
formatter.result({
  "duration": 2505281800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@123",
      "offset": 25
    }
  ],
  "location": "Login.enterPassword(String)"
});
formatter.result({
  "duration": 2505568400,
  "status": "passed"
});
formatter.match({
  "location": "Login.submit()"
});
formatter.result({
  "duration": 2479606100,
  "status": "passed"
});
formatter.match({
  "location": "Login.applicationHomePage()"
});
formatter.result({
  "duration": 21549730800,
  "status": "passed"
});
formatter.match({
  "location": "Login.closeBrowser()"
});
formatter.result({
  "duration": 3231204700,
  "status": "passed"
});
formatter.after({
  "duration": 672657400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Verify login functionality by passing invalid credentials",
  "description": "",
  "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user will be on application\u0027s Login Page With error message \" Error: Invalid administrator login attempt.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin@123"
      ],
      "line": 33,
      "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "Admin@123"
      ],
      "line": 34,
      "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials;;3"
    },
    {
      "cells": [
        "Admin",
        "admin@123"
      ],
      "line": 35,
      "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1008104500,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "User will be on application login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user open \"Chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters url \"http://www.gcrit.com/build3/admin/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will be on Applications login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 11
    }
  ],
  "location": "Login.openBrowser(String)"
});
formatter.result({
  "duration": 5042478600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcrit.com/build3/admin/login",
      "offset": 17
    }
  ],
  "location": "Login.enterURL(String)"
});
formatter.result({
  "duration": 3334595200,
  "status": "passed"
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "duration": 1376154100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify login functionality by passing invalid credentials",
  "description": "",
  "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Login"
    },
    {
      "line": 22,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters username as \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters password as \"Admin@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user will be on application\u0027s Login Page With error message \" Error: Invalid administrator login attempt.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "Login.enterUserName(String)"
});
formatter.result({
  "duration": 2502670400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 25
    }
  ],
  "location": "Login.enterPassword(String)"
});
formatter.result({
  "duration": 2488456600,
  "status": "passed"
});
formatter.match({
  "location": "Login.submit()"
});
formatter.result({
  "duration": 2488662000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Error: Invalid administrator login attempt.",
      "offset": 61
    }
  ],
  "location": "Login.showErrorMessage(String)"
});
formatter.result({
  "duration": 1438232100,
  "status": "passed"
});
formatter.match({
  "location": "Login.closeBrowser()"
});
formatter.result({
  "duration": 3229733200,
  "status": "passed"
});
formatter.after({
  "duration": 181394300,
  "status": "passed"
});
formatter.before({
  "duration": 742579100,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "User will be on application login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user open \"Chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters url \"http://www.gcrit.com/build3/admin/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will be on Applications login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 11
    }
  ],
  "location": "Login.openBrowser(String)"
});
formatter.result({
  "duration": 4099979700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcrit.com/build3/admin/login",
      "offset": 17
    }
  ],
  "location": "Login.enterURL(String)"
});
formatter.result({
  "duration": 3845222900,
  "status": "passed"
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "duration": 1360447700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify login functionality by passing invalid credentials",
  "description": "",
  "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Login"
    },
    {
      "line": 22,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters password as \"Admin@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user will be on application\u0027s Login Page With error message \" Error: Invalid administrator login attempt.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 25
    }
  ],
  "location": "Login.enterUserName(String)"
});
formatter.result({
  "duration": 2512153500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 25
    }
  ],
  "location": "Login.enterPassword(String)"
});
formatter.result({
  "duration": 2560546100,
  "status": "passed"
});
formatter.match({
  "location": "Login.submit()"
});
formatter.result({
  "duration": 2427876400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Error: Invalid administrator login attempt.",
      "offset": 61
    }
  ],
  "location": "Login.showErrorMessage(String)"
});
formatter.result({
  "duration": 1434152100,
  "status": "passed"
});
formatter.match({
  "location": "Login.closeBrowser()"
});
formatter.result({
  "duration": 3183366500,
  "status": "passed"
});
formatter.after({
  "duration": 221074200,
  "status": "passed"
});
formatter.before({
  "duration": 721705500,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "User will be on application login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user open \"Chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters url \"http://www.gcrit.com/build3/admin/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will be on Applications login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 11
    }
  ],
  "location": "Login.openBrowser(String)"
});
formatter.result({
  "duration": 4659042200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gcrit.com/build3/admin/login",
      "offset": 17
    }
  ],
  "location": "Login.enterURL(String)"
});
formatter.result({
  "duration": 3441996200,
  "status": "passed"
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "duration": 1422332000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify login functionality by passing invalid credentials",
  "description": "",
  "id": "login-feature;verify-login-functionality-by-passing-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Login"
    },
    {
      "line": 22,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user enters username as \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters password as \"admin@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user will be on application\u0027s Login Page With error message \" Error: Invalid administrator login attempt.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    }
  ],
  "location": "Login.enterUserName(String)"
});
formatter.result({
  "duration": 2510927400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@123",
      "offset": 25
    }
  ],
  "location": "Login.enterPassword(String)"
});
formatter.result({
  "duration": 2525814900,
  "status": "passed"
});
formatter.match({
  "location": "Login.submit()"
});
formatter.result({
  "duration": 2517573700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Error: Invalid administrator login attempt.",
      "offset": 61
    }
  ],
  "location": "Login.showErrorMessage(String)"
});
formatter.result({
  "duration": 1385395600,
  "status": "passed"
});
formatter.match({
  "location": "Login.closeBrowser()"
});
formatter.result({
  "duration": 3198784700,
  "status": "passed"
});
formatter.after({
  "duration": 201368400,
  "status": "passed"
});
});