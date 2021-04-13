package Camargo.Automacao.BDD.Base;

import Camargo.Automacao.BDD.Utils.WebDriverFactory;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;

import java.awt.*;
import java.io.IOException;

public class TesteBase {

    private static WebDriver driver;
    InteracoesTelaWeb interacoesTelaWeb;

    public static WebDriver getDriver() { return driver; }

    @Before
    public void beforeScenario(Scenario scenario) throws IOException, AWTException {

        driver = WebDriverFactory.CriarWebDriver(WebDriverFactory.Navegador.CHROME);
        interacoesTelaWeb = new InteracoesTelaWeb(driver);
        interacoesTelaWeb.abrirNavegador("http://prova.stefanini-jgr.com.br/teste/qa/");

    }

    @After
    public void afterScenario(Scenario scenario) throws Exception {

        if(driver != null) {
            driver.close();
        }
    }
}
