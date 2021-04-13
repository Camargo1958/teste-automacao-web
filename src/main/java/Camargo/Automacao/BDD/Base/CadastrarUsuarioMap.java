package Camargo.Automacao.BDD.Base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import Camargo.Automacao.BDD.Base.InteracoesTelaWeb;
import Camargo.Automacao.BDD.Base.PaginaBase;

public class CadastrarUsuarioMap extends PaginaBase {
    public CadastrarUsuarioMap(WebDriver driver){
        super(driver);
    }

    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[2]/h2")
    protected WebElement formTitle;

    @FindBy(id = "name")
    protected WebElement formInputUsername;

    @FindBy(id = "email")
    protected WebElement formInputEmail;

    @FindBy(id = "password")
    protected WebElement formInputPassword;

    @FindBy(id = "register")
    protected WebElement formButtonResgister;

    @FindBy(className = "error")
    protected WebElement formErrorMessage;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[2]/h2[2]")
    protected WebElement tableTitle;

    @FindBy(id = "tdUserName1")
    protected  WebElement tdUserName1;

    @FindBy(id = "tdUserEmail1")
    protected WebElement tdUserEmail1;


}
