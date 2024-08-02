#language: pt



Funcionalidade: Login na plataforma
Como cliente da EBAC-SHOP
Quero fazer o login na plataforma
Para visualizar meus pedidos

Contexto:
Dado que eu acesse a pagina de autenticação do Portal EBAC-SHOP

Cenário: Autenticação válida
Quando eu digitar o usuário 'kelvin@ebac.com.br'
E a senha "senha@123"
Então deve exibir uma mensagem de boas vinda "Olá Kelvin"


Cenário: Usuário inexistente
Quando eu digitar o usuário 'xxxx@ebac.com.br'
E a senha 'senha@123'
Então deve exibir uma mensagem de alerta: 'Usuário inexistente'

Cenário: Usuário com senha inválida
Quando eu digitar o usuário 'kelvin@ebac.com.br'
E a senha 'xxx@123'
Então deve exibir uma mensagem de alerta: 'Usuário ou Senha incorreta'

Cenário: Bloqueio de usuário após excesso de tentativas 
Quando eu digitar o usuário ou senha incorretos pela 3ª vez seguida
Então deve bloquear o usuário

Esquema do Cenário: autenticar multiplos usuários
Quando eu digitar <usuario>
E a <senha>
Entao deve exibir uma <mensagem> de alerta

Exemplos:
| Usuario              | senha       | mensagem           |
| "kelvin@ebac.com.br" | "xxxx123"   | "Usuário inválido" |
| "kelvin@ebac.com.br" | "senha@123" | "Olá Kelvin"       |
| "maria@ebac.com.br"  | "senha@123" | "Olá Maria"        |
| "joao@ebac.com.br"   | "senha@123" | "Olá João"         |