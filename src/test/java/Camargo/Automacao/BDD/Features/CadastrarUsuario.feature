#language:pt

@cadastrar
Funcionalidade: Realizar o cadastro de novos usuários
  EU COMO usuário do sistema.
  DESEJO realizar o cadastro de novos usuários.
  PARA QUE seja possível armazenar e gerenciar seus dados.

  @sucesso1
  Esquema do Cenario: Cadastrar um usuario com sucesso
    Dado que eu tenha acessado a tela de cadastramento
    Quando preencho o campo Nome com o valor "<nome>"
    E preencho o campo E-mail com o valor "<email>"
    E preencho o campo Senha com o valor "<senha>"
    E aciono o botao Cadastrar
    Entao o cadastramento do usuario com nome "<nome>" e E-mail "<email>" é realizado com sucesso

    Exemplos:
    | nome           | email                    | senha    |
    | Alfredo Chaves | alfredo.chaves@yahoo.com | 12345678 |
    | Carlos Gomes   | carlos.gomes@triunf.au   | 12345679 |

  @sucesso2
  Esquema do Cenario: Cadastrar dois usuarios com sucesso
    Dado que eu tenha acessado a tela de cadastramento
    Quando preencho o campo Nome com o valor "<nome1>"
    E preencho o campo E-mail com o valor "<email1>"
    E preencho o campo Senha com o valor "<senha1>"
    E aciono o botao Cadastrar
    E preencho o campo Nome com o valor "<nome2>"
    E preencho o campo E-mail com o valor "<email2>"
    E preencho o campo Senha com o valor "<senha2>"
    E aciono o botao Cadastrar
    Entao o cadastramento dos usuarios com nomes "<nome1>" e "<nome2>" e E-mails "<email1>" e "<email2>" é realizado com sucesso

    Exemplos:
      | nome1          | email1                   | senha1    | nome2          | email2                   | senha2   |
      | Carlos Gomes   | carlos.gomes@triunf.au   | 12345679  | Jonas Melo     | jonas.melo@alfa.nzy      | 12345689 |
      | Pedro Silva    | pedro.silva@cartun.de    | 123456afg | Saulo Davila   | saulo.davila@croce.can   | ab345689 |

  @nome_em_branco
  Esquema do Cenario: Tentar cadastrar usuario com nome em branco
    Dado que eu tenha acessado a tela de cadastramento
    Quando preencho o campo Nome com o valor "<nome>"
    E preencho o campo E-mail com o valor "<email>"
    E preencho o campo Senha com o valor "<senha>"
    E aciono o botao Cadastrar
    Entao o sistema apresenta a mensagem de erro "<erro>"

    Exemplos:
      | nome           | email                 | senha    | erro                        |
      |                | paulo.silva@yahoo.com | 12345678 | O campo Nome é obrigatório. |
      |                | jonas.melo@triunf.nz  | 12345679 | O campo Nome é obrigatório. |

  @nome_incompleto
  Esquema do Cenario: Tentar cadastrar usuario com nome incompleto
    Dado que eu tenha acessado a tela de cadastramento
    Quando preencho o campo Nome com o valor "<nome>"
    E preencho o campo E-mail com o valor "<email>"
    E preencho o campo Senha com o valor "<senha>"
    E aciono o botao Cadastrar
    Entao o sistema apresenta a mensagem de erro "<erro>"

    Exemplos:
      | nome           | email                 | senha    | erro                                |
      | Paulo          | paulo.silva@yahoo.com | 12345678 | Por favor, insira um nome completo. |
      | Jonas          | jonas.melo@triunf.nz  | 12345679 | Por favor, insira um nome completo. |

  @email_invalido
  Esquema do Cenario: Tentar cadastrar usuario com email inválido
    Dado que eu tenha acessado a tela de cadastramento
    Quando preencho o campo Nome com o valor "<nome>"
    E preencho o campo E-mail com o valor "<email>"
    E preencho o campo Senha com o valor "<senha>"
    E aciono o botao Cadastrar
    Entao o sistema apresenta a mensagem de erro "<erro>"

    Exemplos:
      | nome           | email                    | senha    | erro                                |
      | Paulo Silva    | paulo.silva@yahoo        | 12345678 | Por favor, insira um e-mail válido. |
      | Jonas Melo     | jonas.melo@triunf        | 12345679 | Por favor, insira um e-mail válido. |

  @email_em_branco
  Esquema do Cenario: Tentar cadastrar usuario com email em branco
    Dado que eu tenha acessado a tela de cadastramento
    Quando preencho o campo Nome com o valor "<nome>"
    E preencho o campo E-mail com o valor "<email>"
    E preencho o campo Senha com o valor "<senha>"
    E aciono o botao Cadastrar
    Entao o sistema apresenta a mensagem de erro "<erro>"

    Exemplos:
      | nome           | email   | senha    | erro                          |
      | Paulo Silva    |         | 12345678 | O campo E-mail é obrigatório. |
      | Jonas Melo     |         | 12345679 | O campo E-mail é obrigatório. |

  @senha_invalida
  Esquema do Cenario: Tentar cadastrar usuario com senha com mesnos de 8 caracteres
    Dado que eu tenha acessado a tela de cadastramento
    Quando preencho o campo Nome com o valor "<nome>"
    E preencho o campo E-mail com o valor "<email>"
    E preencho o campo Senha com o valor "<senha>"
    E aciono o botao Cadastrar
    Entao o sistema apresenta a mensagem de erro "<erro>"

    Exemplos:
      | nome           | email                     | senha    | erro                                       |
      | Paulo Silva    | paulo.silva@yahoo.com     | 1asdfg   | A senha deve conter ao menos 8 caracteres. |
      | Jonas Melo     | jonas.melo@triunf.nz      | rsdggj   | A senha deve conter ao menos 8 caracteres. |

  @senha_em_branco
  Esquema do Cenario: Tentar cadastrar usuario com senha em branco
    Dado que eu tenha acessado a tela de cadastramento
    Quando preencho o campo Nome com o valor "<nome>"
    E preencho o campo E-mail com o valor "<email>"
    E preencho o campo Senha com o valor "<senha>"
    E aciono o botao Cadastrar
    Entao o sistema apresenta a mensagem de erro "<erro>"

    Exemplos:
      | nome           | email                     | senha  | erro                         |
      | Paulo Silva    | paulo.silva@yahoo.com     |        | O campo Senha é obrigatório. |
      | Jonas Melo     | jonas.melo@triunf.nz      |        | O campo Senha é obrigatório. |