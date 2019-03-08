package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = {"src/test/java/featureFiles"},
        tags = {"@iLaBProject"},
        format = {"json:target/cucumber.json","html:target/site/cucumber-pretty"} ,
        glue = {"iLab"})

public class TestNGRunner extends AbstractTestNGCucumberTests {
}

