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
  "name": "Cadastrar usuario com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@sucesso"
    }
  ]
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "o cadastramento do usuario com nome \"\u003cnome\u003e\" e E-mail \"\u003cemail\u003e\" é realizado com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha"
      ]
    },
    {
      "cells": [
        "Alfredo Chaves",
        "alfredo.chaves@yahoo.com",
        "12345678"
      ]
    },
    {
      "cells": [
        "Carlos Gomes",
        "carlos.gomes@triunf.au",
        "12345679"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cadastrar usuario com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@sucesso"
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
  "name": "preencho o campo Nome com o valor \"Alfredo Chaves\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"alfredo.chaves@yahoo.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"12345678\"",
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
  "name": "o cadastramento do usuario com nome \"Alfredo Chaves\" e E-mail \"alfredo.chaves@yahoo.com\" é realizado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oCadastramentoDoUsuarioComNomeEEMailÉRealizadoComSucesso(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar usuario com sucesso",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@sucesso"
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
  "keyword": "Quando "
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
  "name": "o cadastramento do usuario com nome \"Carlos Gomes\" e E-mail \"carlos.gomes@triunf.au\" é realizado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oCadastramentoDoUsuarioComNomeEEMailÉRealizadoComSucesso(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Tentar cadastrar usuario com nome em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@nome_em_branco"
    }
  ]
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema apresenta a mensagem de erro \"\u003cerro\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "erro"
      ]
    },
    {
      "cells": [
        "",
        "paulo.silva@yahoo.com",
        "12345678",
        "O campo Nome é obrigatório."
      ]
    },
    {
      "cells": [
        "",
        "jonas.melo@triunf.nz",
        "12345679",
        "O campo Nome é obrigatório."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com nome em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@nome_em_branco"
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
  "name": "preencho o campo Nome com o valor \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"paulo.silva@yahoo.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"12345678\"",
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
  "name": "o sistema apresenta a mensagem de erro \"O campo Nome é obrigatório.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com nome em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@nome_em_branco"
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
  "name": "preencho o campo Nome com o valor \"\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"jonas.melo@triunf.nz\"",
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
  "name": "o sistema apresenta a mensagem de erro \"O campo Nome é obrigatório.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Tentar cadastrar usuario com nome incompleto",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@nome_incompleto"
    }
  ]
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema apresenta a mensagem de erro \"\u003cerro\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "erro"
      ]
    },
    {
      "cells": [
        "Paulo",
        "paulo.silva@yahoo.com",
        "12345678",
        "Por favor, insira um nome completo."
      ]
    },
    {
      "cells": [
        "Jonas",
        "jonas.melo@triunf.nz",
        "12345679",
        "Por favor, insira um nome completo."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com nome incompleto",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@nome_incompleto"
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
  "name": "preencho o campo Nome com o valor \"Paulo\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"paulo.silva@yahoo.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"12345678\"",
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
  "name": "o sistema apresenta a mensagem de erro \"Por favor, insira um nome completo.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com nome incompleto",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@nome_incompleto"
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
  "name": "preencho o campo Nome com o valor \"Jonas\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"jonas.melo@triunf.nz\"",
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
  "name": "o sistema apresenta a mensagem de erro \"Por favor, insira um nome completo.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Tentar cadastrar usuario com email inválido",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@email_invalido"
    }
  ]
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema apresenta a mensagem de erro \"\u003cerro\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "erro"
      ]
    },
    {
      "cells": [
        "Paulo Silva",
        "paulo.silva@yahoo",
        "12345678",
        "Por favor, insira um e-mail válido."
      ]
    },
    {
      "cells": [
        "Jonas Melo",
        "jonas.melo@triunf",
        "12345679",
        "Por favor, insira um e-mail válido."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com email inválido",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@email_invalido"
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
  "name": "preencho o campo Nome com o valor \"Paulo Silva\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"paulo.silva@yahoo\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"12345678\"",
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
  "name": "o sistema apresenta a mensagem de erro \"Por favor, insira um e-mail válido.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com email inválido",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@email_invalido"
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
  "name": "preencho o campo Nome com o valor \"Jonas Melo\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"jonas.melo@triunf\"",
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
  "name": "o sistema apresenta a mensagem de erro \"Por favor, insira um e-mail válido.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Tentar cadastrar usuario com email em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@email_em_branco"
    }
  ]
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema apresenta a mensagem de erro \"\u003cerro\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "erro"
      ]
    },
    {
      "cells": [
        "Paulo Silva",
        "",
        "12345678",
        "O campo E-mail é obrigatório."
      ]
    },
    {
      "cells": [
        "Jonas Melo",
        "",
        "12345679",
        "O campo E-mail é obrigatório."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com email em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@email_em_branco"
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
  "name": "preencho o campo Nome com o valor \"Paulo Silva\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"12345678\"",
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
  "name": "o sistema apresenta a mensagem de erro \"O campo E-mail é obrigatório.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com email em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@email_em_branco"
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
  "name": "preencho o campo Nome com o valor \"Jonas Melo\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\"",
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
  "name": "o sistema apresenta a mensagem de erro \"O campo E-mail é obrigatório.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Tentar cadastrar usuario com senha com mesnos de 8 caracteres",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@senha_invalida"
    }
  ]
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema apresenta a mensagem de erro \"\u003cerro\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "erro"
      ]
    },
    {
      "cells": [
        "Paulo Silva",
        "paulo.silva@yahoo.com",
        "1asdfg",
        "A senha deve conter ao menos 8 caracteres."
      ]
    },
    {
      "cells": [
        "Jonas Melo",
        "jonas.melo@triunf.nz",
        "rsdggj",
        "A senha deve conter ao menos 8 caracteres."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com senha com mesnos de 8 caracteres",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@senha_invalida"
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
  "name": "preencho o campo Nome com o valor \"Paulo Silva\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"paulo.silva@yahoo.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"1asdfg\"",
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
  "name": "o sistema apresenta a mensagem de erro \"A senha deve conter ao menos 8 caracteres.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com senha com mesnos de 8 caracteres",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@senha_invalida"
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
  "name": "preencho o campo Nome com o valor \"Jonas Melo\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"jonas.melo@triunf.nz\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"rsdggj\"",
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
  "name": "o sistema apresenta a mensagem de erro \"A senha deve conter ao menos 8 caracteres.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Tentar cadastrar usuario com senha em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@senha_em_branco"
    }
  ]
});
formatter.step({
  "name": "que eu tenha acessado a tela de cadastramento",
  "keyword": "Dado "
});
formatter.step({
  "name": "preencho o campo Nome com o valor \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "aciono o botao Cadastrar",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema apresenta a mensagem de erro \"\u003cerro\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "erro"
      ]
    },
    {
      "cells": [
        "Paulo Silva",
        "paulo.silva@yahoo.com",
        "",
        "O campo Senha é obrigatório."
      ]
    },
    {
      "cells": [
        "Jonas Melo",
        "jonas.melo@triunf.nz",
        "",
        "O campo Senha é obrigatório."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com senha em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@senha_em_branco"
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
  "name": "preencho o campo Nome com o valor \"Paulo Silva\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"paulo.silva@yahoo.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\"",
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
  "name": "o sistema apresenta a mensagem de erro \"O campo Senha é obrigatório.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar cadastrar usuario com senha em branco",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@senha_em_branco"
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
  "name": "preencho o campo Nome com o valor \"Jonas Melo\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo E-mail com o valor \"jonas.melo@triunf.nz\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.preenchoOCampoEMailComOValor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Senha com o valor \"\"",
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
  "name": "o sistema apresenta a mensagem de erro \"O campo Senha é obrigatório.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaApresentaAMensagemDeErro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});