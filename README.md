# TODO App

Aplicativo de administração de tarefas simples feito como parte do processo seletivo para a UPBET.

# Pré Requisitos

 - Node v20.x
 - NPM v10.5.0
 - Docker

# Instalação & Execução

Para executar a aplicação, basta clonar a aplicação e executar o docker compose na raiz do projeto, utilizando o comando:
> `docker-compose  up  --build`

O frontend será disponibilizado na porta localhost 3000 e o backend na porta localhost 4000.

Caso queira rodar o projeto sem Docker, entre nas 2 pastas e rode o comando `npm install --force` em cada uma. Após isso, rode os seguintes comandos:

Na pasta backend:
> `npx prisma generate`

> `npx prisma migrate deploy`

> `npm run start:dev` 

Na pasta frontend:
> `npm start`

# Estrutura

O projeto foi dividido em 2 pastas: uma para o frontend (denominada todo-client) e outra para o backend (denominada todo-backend). Cada uma contém sua Dockerfile, e na raiz do projeto (acima das duas pastas), há um docker-compose para orquestrar a aplicação.

Como pedido, o aplicativo foi feito usando ReactJS (com Typescript), NestJS (também com Typescript), e Prisma como ORM. A base de dados é local, utilizando SQLite.
