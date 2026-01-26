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

## 📁 Estrutura do projeto

```text
.
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   ├── utils/
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
