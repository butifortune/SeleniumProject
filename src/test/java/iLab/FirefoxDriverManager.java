package iLab;

import iLab.DriverManager;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FirefoxDriverManager extends DriverManager {

    @Override
    protected void createWebDriver() {
        String path = System.getProperty("user.dir") + "\\resources\\drivers\\Firefox\\geckodriver.exe";
        System.setProperty("webdriver.Firefox.driver", path);

        driver = new FirefoxDriver();
        driver.manage().window().maximize();

    }
}
