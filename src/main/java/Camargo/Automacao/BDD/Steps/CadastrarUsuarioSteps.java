package Camargo.Automacao.BDD.Steps;

import Camargo.Automacao.BDD.Page.CadastrarUsuarioPage;
import io.cucumber.java.pt.*;
import org.junit.Assert;

import java.io.IOException;

public class CadastrarUsuarioSteps {

    CadastrarUsuarioPage cadastrarUsuarioPage = new CadastrarUsuarioPage();

    @Dado("que eu tenha acessado a tela de cadastramento")
    public void queEuTenhaAcessadoATelaDeCadastramento() throws IOException {
        cadastrarUsuarioPage.validarElementosCadastrarUsuarioPage();
    }

    @Quando("preencho o campo Nome com o valor {string}")
    public void preenchoOCampoComOValor(String nomeUsuario) {
        cadastrarUsuarioPage.preencherCampoNomeUsuario(nomeUsuario);
    }

    @Quando("preencho o campo E-mail com o valor {string}")
    public void preenchoOCampoEMailComOValor(String email) {
        cadastrarUsuarioPage.preencherCampoEmail(email);
    }

    @Quando("preencho o campo Senha com o valor {string}")
    public void preenchoOCampoSenhaComOValor(String senha) {
        cadastrarUsuarioPage.preencherCampoSenha(senha);
    }

    @Quando("aciono o botao Cadastrar")
    public void acionoOBotao() {
       cadastrarUsuarioPage.acionarBotaoCadastrar();
    }

    @Entao("o cadastramento do usuario com nome {string} e E-mail {string} é realizado com sucesso")
    public void oCadastramentoDoUsuarioComNomeEEMailÉRealizadoComSucesso(String nomeUsuario, String email) {
        Assert.assertEquals("Usuários cadastrados", cadastrarUsuarioPage.obterTituloTabelaUsuariosCadastrados());
        Assert.assertEquals(nomeUsuario, cadastrarUsuarioPage.obterNomeTabelaUsuariosCadastrados());
        Assert.assertEquals(email, cadastrarUsuarioPage.obterEmailTabelaUsuariosCadastrados());
    }

    @Entao("o sistema apresenta a mensagem de erro {string}")
    public void oSistemaApresentaAMensagemDeErro(String mensagemErro) {
        Assert.assertEquals(mensagemErro, cadastrarUsuarioPage.obterTextoMensagemErro());
    }
}
