package iLab;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class HomePage {
    static WebDriver driver;

    public HomePage(WebDriver driver){
        this.driver = driver;}

    private By careersLink = By.linkText("CAREERS");
    private By southAfricaButton = By.xpath("//a[contains(.,'South Africa')]");
    private By firstJobLink = By.xpath("/html/body/section/div[2]/div/div/div/div[3]/div[2]/div/div/div/div/div/div[1]/div[1]/div[2]/span[1]/a");
    private By applyOnlineButton     = By.xpath("//a[contains(.,'Apply Online')]");

    public void navigateHomPageAndAppy() {
        this.clickCareersLink();
        this.clickSouthAfricaButton();
        this.clickFirstJobLink();
        this.clickApplyOnlineButton();
    }
    public void clickCareersLink(){
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        driver.findElement(careersLink).click();
    }

    public void clickSouthAfricaButton(){
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        driver.findElement(southAfricaButton).click();
    }

    public void clickFirstJobLink() {
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        driver.findElement(firstJobLink).click();
    }

    public void clickApplyOnlineButton()  {

         driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
         driver.findElement(applyOnlineButton).click();}
}
