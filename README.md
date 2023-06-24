![image](https://github.com/d3vlopes/school-management/assets/59663666/9f99634c-cb82-47fa-9c8d-17341a7e3a63)

## Sobre

Esse projeto trata-se de uma API para gerenciamento escolar, onde é possível gerenciar professores e alunos. A API foi desenvolvido utilizando Node e Typescript em conjunto com práticas modernas e robustas de desenvolvimento de software.

## Objetivo

O objetivo do projeto foi construir uma API utilizando as melhores práticas de desenvolvimento de software, criando um código limpo e de fácil manutenção. Para isso foi utilizado a metodologia TDD (Test Driven Development) em conjunto com a arquitetura Clean Architecture separando as responsabilidades em camadas bem definidas para criar uma base sólida e escalável para o projeto.

## Principais features

- Sistema de autenticação completo com geração de token.
- Sistema de controle de acesso, limitando o acesso a rotas.
- Criptografia de senha para aumentar a segurança contra roubo de dados.
- Utilização do TDD para garantir a qualidade e confiabilidade do código.
- Aplicação da arquitetura Clean Architecture, para promover a separação de responsabilidades e a escalabilidade do projeto.
- Utilização de Design Patterns para resolver problemas comuns de desenvolvimento de software.
- Adoção dos princípios SOLID, YAGNI, KISS e DRY, visando um código limpo, simples e fácil de manter.
- Práticas de DevOps, como Continuous Integration(CI) e Continuous Delivery(CD), para automatizar o processo de desenvolvimento e implantação.
- Geração de documentação utilizando a biblioteca [Swagger Autogen](https://github.com/davibaltar/swagger-autogen).
- Validação de dados utilizando a biblioteca [Zod](https://zod.dev), garantindo a integridade dos dados processados.

## Aprendizados

Durante o desenvolvimento desse projeto, adquiri diversos aprendizados significativos. A aplicação do TDD permitiu um desenvolvimento mais controlado, com testes sendo criados antes mesmo da implementação do código. Isso resultou em um código mais confiável e testável.

A utilização do Clean Architecture ajudou a manter uma separação clara de responsabilidades, facilitando a evolução e a manutenção do sistema. Além disso, a aplicação dos princípios SOLID, YAGNI, KISS e DRY trouxe uma maior clareza e simplicidade ao código, evitando duplicações desnecessárias e garantindo a extensibilidade do projeto.

## Tecnologias e ferramentas utilizadas

- [NodeJS](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br)
- [Docker](https://www.docker.com)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev)
- [JWT](jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Tsup](https://github.com/egoist/tsup)
- [Tsx](https://www.npmjs.com/package/tsx)
- [MongoDB](https://www.mongodb.com)
- [Mongoose](https://mongoosejs.com)
- [Zod](https://zod.dev)
- [Swagger Autogen](https://github.com/davibaltar/swagger-autogen)

## Documentação

Convido você a acessar a documentação da API para conhecer mais sobre o projeto. Lá você encontrará informações detalhadas sobre as rotas disponíveis, os parâmetros necessários e as respostas retornadas, [clique aqui](https://school-management-api-5ucj.onrender.com/docs) para acessar.

## Instalação

### Clonando o repositório

```
$ git clone https://github.com/d3vlopes/school-management.git
```

### Instalando as dependências

```
$ yarn
```

### Configurando o banco de dados

1. Instale o [Docker](https://www.docker.com)
2. Copie o arquivo `.env-example` e renomeie para `.env`
3. Inicialize o Docker e rode o comando `yarn docker`

### Rodando o servidor de desenvolvimento

1. Rode o comando `yarn dev`
2. Acesse [http://localhost:8000/docs](http://localhost:8000/docs)

## Comandos

- `dev`: Roda o servidor de desenvolvimento
- `docker`: Executa o arquivo **docker-compose**
- `build`: Gera a versão de produção
- `docs:generate`: Gera/atualiza o arquivo de documentação
- `test`: Roda todos os testes
- `test:unit`: Roda todos os testes com **watch**
- `typecheck`: Verifica se o código contém algum tipo de erro
