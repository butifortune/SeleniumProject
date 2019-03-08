@iLaBProject
Feature: iLaB Job

  Scenario Outline: apply job online from ILaB website
    Given I want to navigate to iLab website
    And   I click on Career and job link
    And   I enter name as  "<name>" and email as "<email>" and phone number then click Send Application button
    Then  Verify upload error message


    Examples:
    |name|email                                |
    |Buti| automationAssessment@iLABQuality.com|