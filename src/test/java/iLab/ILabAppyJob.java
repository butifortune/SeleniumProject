package iLab;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ILabAppyJob {


    static WebDriver driver;
    public ILabAppyJob(WebDriver driver){
        this.driver = driver;}

    private By nameTextbox = By.id("applicant_name");
    private By emailTextBox = By.id("email");
    private By phoneTextbox = By.id("phone");
    private By sendApplicationButton     = By.id("wpjb_submit");
    private static By uploadFileError  = By.className("wpjb-errors");
    private static String expectedError= "You need to upload at least one filed.";

    public void applyJob(String name, String email) throws Throwable{
        this.setName(name);
        this.setEmail(email);
        this.setPhone(ILabAppyJob.GetRandomPhone());
        Thread.sleep(100);
        this.clickSendApplication();
    }
    public void setName(String name){

        driver.findElement(nameTextbox).sendKeys(name);
    }

    public void setEmail(String email){

        driver.findElement(emailTextBox).sendKeys(email);
    }

    public void setPhone(String phone){
        driver.findElement(phoneTextbox).sendKeys(phone);
    }

    public void clickSendApplication(){

        driver.findElement(sendApplicationButton).click();}


    public static String GetRandomPhone(){
        return  String.format("0"+"%02d %03d %04d",
                (int) Math.floor(99*Math.random()),
                (int) Math.floor(999*Math.random()),
                (int) Math.floor(9999*Math.random()));
    }

 public static String getActualError() throws Throwable{
    Thread.sleep(1000);

return driver.findElement(uploadFileError).getText();
    }

 public static String getExpectedError(){

        return expectedError;
 }

}
