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
  "name": "I want to navigate to iLab website on \"\u003cbrowser\u003e\"",
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
        "browser",
        "name",
        "email"
      ],
      "line": 12,
      "id": "ilab-job;apply-job-online-from-ilab-website;;1"
    },
    {
      "cells": [
        "CHROME",
        "Buti",
        "automationAssessment@iLABQuality.com"
      ],
      "line": 13,
      "id": "ilab-job;apply-job-online-from-ilab-website;;2"
    },
    {
      "cells": [
        "IE",
        "Buti",
        "automationAssessment@iLABQuality.com"
      ],
      "line": 14,
      "id": "ilab-job;apply-job-online-from-ilab-website;;3"
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
  "name": "I want to navigate to iLab website on \"CHROME\"",
  "matchedColumns": [
    0
  ],
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
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify upload error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 39
    }
  ],
  "location": "Tests.iWantToNavigateToILabWebsiteOn(String)"
});
formatter.result({
  "duration": 86795772374,
  "status": "passed"
});
formatter.match({
  "location": "Tests.iClickOnCareerAndJobLink()"
});
formatter.result({
  "duration": 39907851283,
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
  "duration": 6187063850,
  "status": "passed"
});
formatter.match({
  "location": "Tests.verifyUploadErrorMessage()"
});
formatter.result({
  "duration": 1088438057,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ad at least one file[].\u003e but was:\u003c...ad at least one file[d].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat iLab.Tests.verifyUploadErrorMessage(Tests.java:57)\r\n\tat ✽.Then Verify upload error message(iLab.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "apply job online from ILaB website",
  "description": "",
  "id": "ilab-job;apply-job-online-from-ilab-website;;3",
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
  "name": "I want to navigate to iLab website on \"IE\"",
  "matchedColumns": [
    0
  ],
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
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify upload error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "IE",
      "offset": 39
    }
  ],
  "location": "Tests.iWantToNavigateToILabWebsiteOn(String)"
});
formatter.result({
  "duration": 39473923,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Automation\\POMExample_v1\\ILaB\\resources\\drivers\\IEDriverServer.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:534)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:131)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriverService.access$000(InternetExplorerDriverService.java:32)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriverService$Builder.findDefaultExecutable(InternetExplorerDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:329)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.setupService(InternetExplorerDriver.java:291)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:152)\r\n\tat iLab.IEDriverManager.createWebDriver(IEDriverManager.java:13)\r\n\tat iLab.DriverManager.getWebDriver(DriverManager.java:15)\r\n\tat iLab.Tests.iWantToNavigateToILabWebsiteOn(Tests.java:63)\r\n\tat ✽.Given I want to navigate to iLab website on \"IE\"(iLab.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Tests.iClickOnCareerAndJobLink()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Tests.verifyUploadErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
});