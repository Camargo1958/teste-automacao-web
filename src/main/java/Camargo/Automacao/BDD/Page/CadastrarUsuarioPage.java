package Camargo.Automacao.BDD.Page;

import Camargo.Automacao.BDD.Base.CadastrarUsuarioMap;
import Camargo.Automacao.BDD.Base.InteracoesTelaWeb;
import Camargo.Automacao.BDD.Base.TesteBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class CadastrarUsuarioPage extends CadastrarUsuarioMap {

    public CadastrarUsuarioPage(){
        super(TesteBase.getDriver());
        PageFactory.initElements(TesteBase.getDriver(), this);
    }

    public void validarElementosCadastrarUsuarioPage() throws IOException {

        aguardarElementoVisivel(formTitle);
        aguardarElementoVisivel(formInputUsername);
        aguardarElementoVisivel(formInputEmail);
        aguardarElementoVisivel(formInputPassword);
        aguardarElementoVisivel(formButtonResgister);
    }

    public void preencherCampoNomeUsuario(String nomeUsuario) {

        inserirValor(formInputUsername, nomeUsuario);
    }

    public void preencherCampoEmail(String email){

        inserirValor(formInputEmail, email);
    }

    public void preencherCampoSenha(String senha) {

        inserirValor(formInputPassword, senha);
    }

    public void acionarBotaoCadastrar() {

        clicarElemento(formButtonResgister);
    }

    public String obterTextoMensagemErro() {

        return obterValorTexto(formErrorMessage);
    }

    public String obterTituloTabelaUsuariosCadastrados() {

        return obterValorTexto(tableTitle);
    }

    public String obterUserId1TabelaUsuariosCadastrados() {

        return obterValorTexto(tdUserId1);
    }

    public String obterNome1TabelaUsuariosCadastrados() {

        return obterValorTexto(tdUserName1);
    }

    public String obterEmail1TabelaUsuariosCadastrados() {

        return obterValorTexto(tdUserEmail1);
    }

    public String obterUserId2TabelaUsuariosCadastrados() {

        return obterValorTexto(tdUserId2);
    }

    public String obterNome2TabelaUsuariosCadastrados() {

        return obterValorTexto(tdUserName2);
    }

    public String obterEmail2TabelaUsuariosCadastrados() {

        return obterValorTexto(tdUserEmail2);
    }

    public void excluirUsuario1() {
        clicarElemento(removeUser1);
    }

}
