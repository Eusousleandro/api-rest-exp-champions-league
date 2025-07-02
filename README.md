# 🏆 API REST - UEFA Champions League

Esta API foi desenvolvida com **Node.js**, **Express** e **TypeScript** para fornecer e manipular informações da UEFA Champions League.  
Atualmente, a API oferece um CRUD completo de jogadores (players).

---

## 📌 Funcionalidades

- ✅ Listar todos os jogadores
- 🔍 Buscar jogador por ID
- ➕ Criar novo jogador
- ✏️ Atualizar jogador existente
- 🗑️ Remover jogador

---

## 📁 Estrutura do Projeto

api-rest-champions-league/
├── src/
│ ├── controllers/
│ ├── database/
│ ├── Interfaces/
│ ├── repositories/
│ ├── services/
│ ├── utils/
│ ├── app.ts
│ ├── routes.ts
│ └── server.ts
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

yaml
Copiar
Editar

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone hhttps://github.com/Eusousleandro/api-rest-expr-champios-league.git
cd api-rest-champions-league
2. Instalar dependências
bash
Copiar
Editar
npm install
3. Configurar variáveis de ambiente
bash
Copiar
Editar
cp .env.example .env
4. Iniciar o servidor
bash
Copiar
Editar
npx ts-node src/server.ts
🌐 Endpoints da API
Base URL: http://localhost:<PORT>/api

▶️ GET /players
Retorna todos os jogadores cadastrados.

Exemplo de resposta
json
Copiar
Editar
[
  {
    "id": 1,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "position": "Forward"
  }
]
🔎 GET /players/:id
Busca um jogador específico pelo ID.

Exemplo de resposta
json
Copiar
Editar
{
  "id": 1,
  "name": "Erling Haaland",
  "club": "Manchester City",
  "position": "Forward"
}
➕ POST /players
Cria um novo jogador.

Corpo da requisição (JSON)
json
Copiar
Editar
{
  "name": "Jude Bellingham",
  "club": "Real Madrid",
  "position": "Midfielder"
}
Exemplo de resposta
json
Copiar
Editar
{
  "message": "Player created successfully",
  "player": {
    "id": 6,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "position": "Midfielder"
  }
}
✏️ PUT /players/:id
Atualiza dados de um jogador existente.

Corpo da requisição (JSON)
json
Copiar
Editar
{
  "name": "Jude Bellingham",
  "club": "Real Madrid",
  "position": "Attacking Midfielder"
}
Exemplo de resposta
json
Copiar
Editar
{
  "message": "Player updated successfully"
}
🗑️ DELETE /players/:id
Remove um jogador pelo ID.

Exemplo de resposta
json
Copiar
Editar
{
  "message": "Player deleted successfully"
}
🛠 Tecnologias Utilizadas
Node.js

Express

TypeScript

Dotenv

📄 Licença
Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.