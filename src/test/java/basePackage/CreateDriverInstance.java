package basePackage;
import java.util.ResourceBundle;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class CreateDriverInstance {
	
	static WebDriver driver;
	
	public static WebDriver generateDriver(){
		
		ResourceBundle bundle = ResourceBundle.getBundle("config");
		
		if(bundle.getString("browser").equalsIgnoreCase("chrome")){	
			System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
			driver = new ChromeDriver();		
		}
		else if(bundle.getString("browser").equalsIgnoreCase("firefox")) {
			driver = new FirefoxDriver();
		}
		else if(bundle.getString("browser").equalsIgnoreCase("internetexplorer")) {
			driver = new InternetExplorerDriver();
		}
		else {
			 driver = new ChromeDriver();
		}
		driver.get(bundle.getString("applicationURL"));
		return driver;
	}

	public void closeDriver(WebDriver driver){
		driver.close();
		
	}
}
