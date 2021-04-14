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
        Assert.assertEquals(nomeUsuario, cadastrarUsuarioPage.obterNome1TabelaUsuariosCadastrados());
        Assert.assertEquals(email, cadastrarUsuarioPage.obterEmail1TabelaUsuariosCadastrados());
    }

    @Entao("o sistema apresenta a mensagem de erro {string}")
    public void oSistemaApresentaAMensagemDeErro(String mensagemErro) {
        Assert.assertEquals(mensagemErro, cadastrarUsuarioPage.obterTextoMensagemErro());
    }

    @Entao("o cadastramento dos usuarios com nomes {string} e {string} e E-mails {string} e {string} é realizado com sucesso")
    public void oCadastramentoDosUsuariosComNomesEEEMailsECarlosGomesTriunfAuÉRealizadoComSucesso(String nomeUsuario1, String nomeUsuario2, String email1, String email2) {
        Assert.assertEquals("Usuários cadastrados", cadastrarUsuarioPage.obterTituloTabelaUsuariosCadastrados());
        Assert.assertEquals(nomeUsuario1, cadastrarUsuarioPage.obterNome1TabelaUsuariosCadastrados());
        Assert.assertEquals(email1, cadastrarUsuarioPage.obterEmail1TabelaUsuariosCadastrados());
        Assert.assertEquals(nomeUsuario2, cadastrarUsuarioPage.obterNome2TabelaUsuariosCadastrados());
        Assert.assertEquals(email2, cadastrarUsuarioPage.obterEmail2TabelaUsuariosCadastrados());
    }

    @Dado("o cadastramento dos usuarios {string} e {string} e E-mails {string} e {string} é realizado com sucesso")
    public void efetuoOCadastramentoDosUsuariosComNomesEEEMailsEÉRealizadoComSucesso(String nomeUsuario1, String nomeUsuario2, String email1, String email2) {
        Assert.assertEquals("Usuários cadastrados", cadastrarUsuarioPage.obterTituloTabelaUsuariosCadastrados());
        Assert.assertEquals(nomeUsuario1, cadastrarUsuarioPage.obterNome1TabelaUsuariosCadastrados());
        Assert.assertEquals(email1, cadastrarUsuarioPage.obterEmail1TabelaUsuariosCadastrados());
        Assert.assertEquals(nomeUsuario2, cadastrarUsuarioPage.obterNome2TabelaUsuariosCadastrados());
        Assert.assertEquals(email2, cadastrarUsuarioPage.obterEmail2TabelaUsuariosCadastrados());
    }

    @Quando("eu excluo o primeiro usuario")
    public void euExcluoOPrimeiroUsuario() {
        cadastrarUsuarioPage.excluirUsuario1();
    }

    @Entao("o sistema atualiza a tabela de usuarios e apresenta apenas o segundo usuario com nome {string} e E-mail {string}")
    public void oSistemaAtualizaATabelaDeUsuariosEApresentaApenasOSegundoUsuarioComNome(String nomeUsuario1, String email1) {
        Assert.assertEquals(nomeUsuario1, cadastrarUsuarioPage.obterNome2TabelaUsuariosCadastrados());
        Assert.assertEquals(email1, cadastrarUsuarioPage.obterEmail2TabelaUsuariosCadastrados());
    }

}
