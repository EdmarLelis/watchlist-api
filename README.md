# 🎬 Watchlist API

API backend desenvolvida para gerenciamento de listas de filmes, focada em segurança e performance. Utiliza **Node.js** com **Prisma** e **PostgreSQL** com autenticação JWT.

---

## 🚀 Tecnologias

O projeto foi construído utilizando as melhores práticas do ecossistema Node.js:

* **Runtime:** Node.js (v18+)
* **Framework:** Express
* **ORM:** Prisma
* **Banco de Dados:** PostgreSQL
* **Segurança:** JWT (JSON Web Tokens) & Bcrypt para hashing de senhas
* **Linguagem:** JavaScript (ESModules)

---

## ⚙️ Funcionalidades

* **Gestão de Usuários:** Cadastro e autenticação segura.
* **Segurança:** Proteção de rotas via Middleware de autenticação JWT.
* **Catálogo de Filmes:** CRUD completo de títulos.
* **Watchlists:** Relacionamento dinâmico entre usuários e seus filmes favoritos.
* **Dados Iniciais:** Sistema de *seed* para agilizar o setup do ambiente de desenvolvimento.

---

## 🛣️ Principais Endpoints

| Método | Endpoint | Descrição | Autenticação |
| --- | --- | --- | --- |
| `POST` | `/auth/register` | Cria um novo usuário | Não |
| `POST` | `/auth/login` | Retorna o token JWT | Não |
| `POST` | `/auth/logout` | Limpa o token JWT | Não |
| `POST` | `/watchlist` | Adiciona filme à lista do usuário | Sim |
| `DELETE` | `/watchlist/:id` | Deleta um filme da lista do usuário | Sim |
| `PUT` | `/watchlist/:id` | Modifica um filme da lista do usuário | Sim |

---

## 🔐 Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto seguindo o modelo abaixo:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/database_name"

# App
NODE_ENV="development"

# Auth
JWT_SECRET="sua_chave_secreta_super_segura"
JWT_EXPIRES_IN="1d"

```

---

## 🧪 Como rodar localmente

### Pré-requisitos

* **Node.js** (v18 ou superior)
* Instância de **PostgreSQL** ativa (Local ou Cloud)

### Passo a Passo

1. **Clonar e instalar:**
```bash
git clone git@github.com:EdmarLelis/whatchlist-api.git
cd whatchlist-api
npm install

```


2. **Banco de Dados & Prisma:**
```bash
# Gera o client do Prisma
npx prisma generate

# Roda as migrations para criar as tabelas
npx prisma migrate dev

# (Opcional) Popula o banco com dados iniciais
npm run seed:movies

```


3. **Execução:**
```bash
npm run dev

```


> Acesse em: `http://localhost:3000`



---

## 📌 Status do projeto

🚧 **Em desenvolvimento**.
