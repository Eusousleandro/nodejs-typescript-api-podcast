# 🎙️ Node.js TypeScript API - Podcast Manager

Este é um projeto simples de API REST para gerenciamento de episódios de podcast, construído com **Node.js**, **TypeScript** e sem frameworks externos como Express — utilizando apenas o módulo HTTP nativo do Node.

---

## 🚀 Funcionalidades

- 📄 **Listar todos os episódios**
- 🔍 **Buscar episódio por filtro (ex: ID ou título)**

---

## 📁 Estrutura do Projeto

src/
├── controllers/
│ └── podcastController.ts
├── routes/
│ └── routes.ts
├── utils/
│ └── httpMethods.ts
├── server.ts


---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório:

```bash
git clone https://github.com/Eusousleandro/nodejs-typescript-api-podcast.git
cd nodejs-typescript-api-podcast
```
---

## ⚙️ Instale as dependências
npm install
npx tsc
node dist/server.js

📡 Rotas da API
✅ GET /episodes
Retorna a lista de todos os episódios disponíveis.

✅ GET /episode?id=123
Retorna os detalhes de um episódio específico com base no ID ou outro filtro definido.

🧠 Observações técnicas
Utiliza createServer do Node.js para criar o servidor.

Organização por camadas: controladores, rotas e utilitários.

Implementação básica de roteamento com base em request.method e request.url.

👨‍💻 Autor
Desenvolvido por Leandro
🔗 GitHub: @Eusousleandro


---

Se quiser, posso adaptar com mais detalhes — como exemplos de resposta da API, estrutura dos dados do episódio, ou um `package.json` de exemplo. Deseja?
