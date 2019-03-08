$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("iLab.feature");
formatter.feature({
  "line": 2,
  "name": "iLaB Job",
  "description": "",
  "id": "ilab-job",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@iLaBProject"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "apply job online from ILaB website",
  "description": "",
  "id": "ilab-job;apply-job-online-from-ilab-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to navigate to iLab website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Career and job link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter name as  \"\u003cname\u003e\" and email as \"\u003cemail\u003e\" and phone number then click Send Application button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify upload error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "ilab-job;apply-job-online-from-ilab-website;",
  "rows": [
    {
      "cells": [
        "name",
        "email"
      ],
      "line": 12,
      "id": "ilab-job;apply-job-online-from-ilab-website;;1"
    },
    {
      "cells": [
        "Buti",
        "automationAssessment@iLABQuality.com"
      ],
      "line": 13,
      "id": "ilab-job;apply-job-online-from-ilab-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "apply job online from ILaB website",
  "description": "",
  "id": "ilab-job;apply-job-online-from-ilab-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@iLaBProject"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to navigate to iLab website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Career and job link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter name as  \"Buti\" and email as \"automationAssessment@iLABQuality.com\" and phone number then click Send Application button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify upload error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Tests.iWantToNavigateToILabWebsite()"
});
formatter.result({
  "duration": 108792064063,
  "status": "passed"
});
formatter.match({
  "location": "Tests.iClickOnCareerAndJobLink()"
});
formatter.result({
  "duration": 23932217407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buti",
      "offset": 18
    },
    {
      "val": "automationAssessment@iLABQuality.com",
      "offset": 38
    }
  ],
  "location": "Tests.iEnterNameAsAndEmailAsAndPhoneNumberThenClickSendApplicationButton(String,String)"
});
formatter.result({
  "duration": 8192839585,
  "status": "passed"
});
formatter.match({
  "location": "Tests.verifyUploadErrorMessage()"
});
formatter.result({
  "duration": 1065573188,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ad at least one file[].\u003e but was:\u003c...ad at least one file[d].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat iLab.Tests.verifyUploadErrorMessage(Tests.java:61)\r\n\tat ✽.Then Verify upload error message(iLab.feature:8)\r\n",
  "status": "failed"
});
});