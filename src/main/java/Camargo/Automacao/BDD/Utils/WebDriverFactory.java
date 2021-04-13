package Camargo.Automacao.BDD.Utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;


public class WebDriverFactory {
	
	static WebDriver driver;

	public enum Navegador {

		CHROME,
		FIREFOX,
		INTERNETEXPLORER,
		SAFARI

	}
	
	public static WebDriver CriarWebDriver(Navegador navegador, String pathWebDriver) {
		
		try {
			
			PageLoadStrategy pageLoadStrategy = PageLoadStrategy.NORMAL;
			
			switch (navegador) {
			case CHROME:
				System.setProperty("webdriver.chrome.driver", pathWebDriver);
				ChromeOptions chromeOptions = new ChromeOptions();
				chromeOptions.setPageLoadStrategy(pageLoadStrategy);
				driver = new ChromeDriver(chromeOptions);
				break;
			case FIREFOX:
				System.setProperty("webdriver.gecko.driver", pathWebDriver);
				FirefoxOptions firefoxOptions = new FirefoxOptions();
				firefoxOptions.setPageLoadStrategy(pageLoadStrategy);
				driver = new FirefoxDriver(firefoxOptions);
				break;
			case INTERNETEXPLORER:
				System.setProperty("webdriver.ie.driver", pathWebDriver);
				InternetExplorerOptions internetExplorerOptions = new InternetExplorerOptions();
				internetExplorerOptions.setPageLoadStrategy(pageLoadStrategy);
				driver = new InternetExplorerDriver(internetExplorerOptions);
				break;
			default:
				Assert.fail("Não foi possível iniciar o WebDriver: " + navegador.toString());
				break;
			}
			
		} catch (Exception e) {
			Assert.fail(e.toString());
		}
		
		return driver;
	}
	
	
	public static WebDriver CriarWebDriver(Navegador navegador) {
		
		try {
			
			PageLoadStrategy pageLoadStrategy = PageLoadStrategy.NORMAL;
			
			switch (navegador) {
			case CHROME:
				WebDriverManager.chromedriver().setup();
				ChromeOptions chromeOptions = new ChromeOptions();
				chromeOptions.setPageLoadStrategy(pageLoadStrategy);
				driver = new ChromeDriver(chromeOptions);
				break;
			case FIREFOX:
				WebDriverManager.firefoxdriver().setup();
				FirefoxOptions firefoxOptions = new FirefoxOptions();
				firefoxOptions.setPageLoadStrategy(pageLoadStrategy);
				driver = new FirefoxDriver(firefoxOptions);
				break;
			case INTERNETEXPLORER:
				WebDriverManager.iedriver().setup();
				InternetExplorerOptions internetExplorerOptions = new InternetExplorerOptions();
				internetExplorerOptions.setPageLoadStrategy(pageLoadStrategy);
				driver = new InternetExplorerDriver(internetExplorerOptions);
				break;
			default:
				Assert.fail("Não foi possível iniciar o WebDriver: " + navegador.toString());
				break;
			}
			
		} catch (Exception e) {
			Assert.fail(e.toString());
		}
		
		return driver;
	}

}
