# TODO App

Aplicativo de administração de tarefas simples feito como parte do processo seletivo para a UPBET.

# Pré Requisitos

 - Node v20.x
 - NPM v10.5.0
 - Docker

# Estrutura

O projeto foi dividido em 2 pastas: uma para o frontend (denominada todo-client) e outra para o backend (denominada todo-backend). Cada uma contém sua Dockerfile, e na raiz do projeto (acima das duas pastas), há um docker-compose para orquestrar a aplicação.

Como pedido, o aplicativo foi feito usando ReactJS (com Typescript), NestJS (também com Typescript), e Prisma como ORM. A base de dados é local, utilizando SQLite.

# Instalação & Execução

Para executar a aplicação, basta executar o docker compose na raiz do projeto, utilizando o comando:
> `docker-compose  up  --build`