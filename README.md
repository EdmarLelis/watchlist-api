# 🎬 Watchlist API

API backend desenvolvida com **Node.js, Express, Prisma e PostgreSQL**, com autenticação JWT e relacionamentos entre usuários, filmes e watchlists.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Token)
- bcrypt
- JavaScript (ESModules)

---

## ⚙️ Funcionalidades
- Cadastro de usuários
- Autenticação com JWT
- CRUD de filmes
- Relacionamento entre usuários, filmes e watchlists
- Proteção de rotas com middleware de autenticação
- Seed de dados para ambiente de desenvolvimento

---

## 🔐 Variáveis de ambiente

Este projeto utiliza variáveis de ambiente para configuração.

Crie um arquivo `.env` baseado no `.env.example`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/database_name"
NODE_ENV="development"
JWT_SECRET="your_jwt_secret_here"
JWT_EXPIRES_IN="1d"

🧪 Como rodar o projeto localmente
Pré-requisitos

-Node.js (versão 18 ou superior)
-Banco de dados PostgreSQL (Neon ou local)
-npm ou yarn

1️⃣ Clonar o repositório

git clone git@github.com:SEU_USUARIO/NOME_DO_REPO.git
cd NOME_DO_REPO

2️⃣ Instalar as dependências

npm install

3️⃣ Configurar variáveis de ambiente

cp .env.example .env

Preencha as variáveis de ambiente no arquivo .env.
4️⃣ Gerar o Prisma Client

npx prisma generate

5️⃣ Rodar as migrations

npx prisma migrate dev

6️⃣ (Opcional) Rodar seed

npx prisma db seed

7️⃣ Iniciar o servidor

npm run dev

O servidor estará disponível em:

http://localhost:3000

📌 Status do projeto

🚧 Em desenvolvimento — melhorias e novas funcionalidades serão adicionadas.
