#language:pt

@cadastrar
Funcionalidade: Realizar o cadastro de novos usuários
  EU COMO usuário do sistema.
  DESEJO realizar o cadastro de novos usuários.
  PARA QUE seja possível armazenar e gerenciar seus dados.

  @sucesso
  Esquema do Cenario: Cadastrar usuario com sucesso
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