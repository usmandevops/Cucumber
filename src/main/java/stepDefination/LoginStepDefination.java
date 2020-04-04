package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	WebDriver driver;
	
	
	@Given("^User is already on LoginPage$")
	public void user_already_on_login_page(){
		System.setProperty("webdriver.chrome.driver", "./Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://esms.key2act.work/signin");
	}
	@When("^title of login page is BoB$")
	public void title_of_login_page_is_BoB() throws Throwable {
	   String title = driver.getTitle();
	   System.out.println(title);
	   Assert.assertEquals("BOB",title);
	}
	
	@Then("^User enters username and password$")
	public void user_enters_username_and_password() {
		driver.findElement(By.name("email")).sendKeys("username");
		driver.findElement(By.name("password")).sendKeys("password");
	   
	}
	@Then("^user  clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//*[text()='Sign In']")).click();
	    
	}
	@Then("^User is on My Account$")
	public void user_is_on_My_Account() {
		String title = driver.getTitle();
		   System.out.println("My Account Title ::"+ title);
		   Assert.assertEquals("BOB",title);
		
	   	}
	@And("^User log out$")
	public void user_log_out(){
		driver.quit();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
