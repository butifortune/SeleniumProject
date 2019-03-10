package iLab;



import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import iLab.DriverManager;
import iLab.DriverManagerFactory;
import iLab.DriverType;
import iLab.ILabAppyJob;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;


public class Tests  {

    DriverManager driverManager;

    @Given("^I want to navigate to iLab website$")
    public void iWantToNavigateToILabWebsite() throws Throwable {

    }
    @After
    public void quit(Scenario scenario){

        if (scenario.isFailed()) {
            final byte[] screenshot = ((TakesScreenshot) driverManager.driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
        driverManager.driver.close();
        driverManager.quitWebDriver();
    }


    @And("^I click on Career, South Africa, FirstJobLink then ApplyOnlineButton$")
    public void iClickOnCareerAndJobLink(){
        HomePage homePageAndApply = new HomePage(driverManager.driver);
       homePageAndApply.navigateHomPageAndAppy();
    }

    @And("^I enter name as  \"([^\"]*)\" and email as \"([^\"]*)\" and phone number then click Send Application button$")
    public void iEnterNameAsAndEmailAsAndPhoneNumberThenClickSendApplicationButton(String name, String email) throws Throwable {
        ILabAppyJob applyJob = new ILabAppyJob(driverManager.driver);
        applyJob.applyJob(name,email);
    }

    @Then("^Verify upload error message$")
    public void verifyUploadErrorMessage() throws Throwable {

        Assert.assertTrue(ILabAppyJob.getActualError().toLowerCase().contains(ILabAppyJob.getExpectedError().toLowerCase() ));
    }

    @Given("^I want to navigate to iLab website on \"([^\"]*)\"$")
    public void iWantToNavigateToILabWebsiteOn(String browser) throws Throwable {
        driverManager = DriverManagerFactory.getDriverManager(DriverType.valueOf(browser));
        driverManager.driver= driverManager.getWebDriver();
        driverManager.driver.get("https://www.ilabquality.com/");
        driverManager.driver.manage().window().maximize();
        Thread.sleep(1000);
    }
}




