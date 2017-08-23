package pagesPackage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BMIPage {
	
	@FindBy(css="#heightCMS") WebElement height_txt;
	@FindBy(css="#weightKg") WebElement weight_txt;
	@FindBy(css="#Calculate") WebElement calc_button;
	@FindBy(css="#bmi") WebElement bmi_txt;
	@FindBy(css="#bmi_category") WebElement category_txt;
	
	public BMIPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void enterHeight(String height){
		height_txt.sendKeys(height);
	}
	
	public void enterWeight(String weight){
		weight_txt.sendKeys(weight);
	}
	
	public void click_cal_button(){
		calc_button.click();
	}
	
	public String verifybmi(){
		return bmi_txt.getText().toString();
	}
	
	public String verifycategory(){
		return category_txt.getAttribute("value");
	}
}
