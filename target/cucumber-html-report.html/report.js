$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Camargo/Automacao/BDD/Features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Realizar o cadastro de novos usuários",
  "description": "  EU COMO usuário do sistema.\n  DESEJO realizar o cadastro de novos usuários.\n  PARA QUE seja possível armazenar e gerenciar seus dados.",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@cadastrar"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Cadastrar dois usuarios e excluir um com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@excluir_um_usuario"
    }
  ]
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome1\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail1\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha1\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome2\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail2\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha2\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "o cadastramento dos usuarios \"\u003cnome1\u003e\" e \"\u003cnome2\u003e\" e E-mails \"\u003cemail1\u003e\" e \"\u003cemail2\u003e\" é realizado com sucesso",
  "keyword": "E "
});
formatter.step({
  "name": "eu excluo o primeiro usuario",
  "keyword": "Quando "
});
formatter.step({
  "name": "o sistema atualiza a tabela de usuarios e apresenta apenas o segundo usuario com nome \"\u003cnome2\u003e\" e E-mail \"\u003cemail2\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome1",
        "email1",
        "senha1",
        "nome2",
        "email2",
        "senha2"
      ]
    },
    {
      "cells": [
        "Carlos Gomes",
        "carlos.gomes@triunf.au",
        "12345679",
        "Jonas Melo",
        "jonas.melo@alfa.nzy",
        "12345689"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cadastrar dois usuarios e excluir um com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@excluir_um_usuario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.queEuTenhaAcessadoATelaDeCadastramento()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"Carlos Gomes\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"carlos.gomes@triunf.au\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"12345679\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoSenhaComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionoOBotao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"Jonas Melo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"jonas.melo@alfa.nzy\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"12345689\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoSenhaComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionoOBotao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o cadastramento dos usuarios \"Carlos Gomes\" e \"Jonas Melo\" e E-mails \"carlos.gomes@triunf.au\" e \"jonas.melo@alfa.nzy\" é realizado com sucesso",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.efetuoOCadastramentoDosUsuariosComNomesEEEMailsEÉRealizadoComSucesso(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu excluo o primeiro usuario",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euExcluoOPrimeiroUsuario()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema atualiza a tabela de usuarios e apresenta apenas o segundo usuario com nome \"Jonas Melo\" e E-mail \"jonas.melo@alfa.nzy\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaAtualizaATabelaDeUsuariosEApresentaApenasOSegundoUsuarioComNome(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});