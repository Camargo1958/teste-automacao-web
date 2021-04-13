package Camargo.Automacao.BDD.Base;

import org.junit.Assert;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class InteracoesTelaWeb {

    private WebDriver driver;
    private static WebDriverWait wait;

    public InteracoesTelaWeb(WebDriver driver){

        this.driver = driver;
    }

    public void abrirNavegador(String url) {
        driver.get(url);
        driver.manage().window().maximize();
    }

    protected void aguardarElementoVisivel(WebElement elemento) {

        try {
            wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.visibilityOf(elemento));
        } catch (TimeoutException e) {
            Assert.fail(e.toString());
        }
    }

    protected void inserirValor(WebElement elemento, String valor) {
        aguardarClickHabilitado(elemento);
        elemento.click();
        elemento.sendKeys(valor);
    }

    protected void aguardarClickHabilitado(WebElement elemento) {

        try {
            wait = new WebDriverWait(driver, 10);
            wait.until(ExpectedConditions.elementToBeClickable(elemento));
        } catch (TimeoutException e) {
            Assert.fail(e.toString());
        }
    }

    protected void clicarElemento(WebElement elemento) {

        aguardarClickHabilitado(elemento);
        elemento.click();
    }

    protected String obterValorTexto(WebElement elemento) {
        aguardarElementoVisivel(elemento);
        String value = elemento.getText();
        return value;
    }
}
