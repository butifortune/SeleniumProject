@iLaBProject
Feature: iLaB Job

  Scenario Outline: apply job online from ILaB website
    Given I want to navigate to iLab website on "<browser>"
    And   I click on Career, South Africa, FirstJobLink then ApplyOnlineButton
    And   I enter name as  "<name>" and email as "<email>" and phone number then click Send Application button
    Then  Verify upload error message


    Examples:
    |browser|name |email                                           |
    |CHROME       |Buti    | automationAssessment@iLABQuality.com |
    |IE           | Buti   |  automationAssessment@iLABQuality.com|