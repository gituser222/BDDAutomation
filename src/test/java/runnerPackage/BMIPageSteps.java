package runnerPackage;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import static org.junit.Assert.assertEquals;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import basePackage.CreateDriverInstance;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pagesPackage.BMIPage;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;

public class BMIPageSteps {
	WebDriver driver;
	BMIPage page;
	
	@After
	public void teardown(Scenario scenario) throws Exception{
		if(scenario.isFailed()){
			//scenario.write(scenario.getName()+"******failed*******");
			scenario.write(scenario.getName() + scenario.getStatus());
			scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
		}
		driver.close();
	}
	
	@Given("^user is on BMI page$")
	public void user_is_on_BMI_page() throws Throwable {
		driver = CreateDriverInstance.generateDriver();
	}
	
	@When("^user enters (\\d+) in centimeters$")
	public void user_enters_in_centimeters(String ht) throws Throwable {
		page = new BMIPage(driver);
		page.enterHeight(ht);
	}

	@When("^user enters (\\d+) in Kilos$")
	public void user_enters_in_Kilos(String wt) throws Throwable {
		page.enterWeight(wt);
	}

	@When("^user clicks on Calculate button$")
	public void user_clicks_on_Calculate_button() throws Throwable {
	    page.click_cal_button();
	}

	@Then("^BMI is displayed is BMI$")
	public void BMI_is_displayed_is_BMI() throws Throwable {
	    // Express the Regexp above with the code you wish you had
	}

	@Then("^Category is displayed in \"([^\"]*)\"$")
	public void Category_is_displayed_in(String category) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    assertEquals(category,page.verifycategory());
		/*System.out.println(category);
		System.out.println("After");
		System.out.println(page.verifycategory());*/
	}
}
