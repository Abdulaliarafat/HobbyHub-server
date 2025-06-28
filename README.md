# 🎯 HobbyHub Server

**HobbyHub Server** is the backend of the HobbyHub web application, built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. It exposes a RESTful API for managing hobby groups, protected by a modular and scalable architecture.

---
## 💻 Getting Started Locally

# git clone https://github.com/Abdulaliarafat/HobbyHub-server.git
# cd BitClock-server
# npm install
# npm i express
# http://localhost:3000
# npm start
---

## 🌐 Live URLs

🔵 Client: [https://hobbyhub-app.netlify.app](https://hobbyhub-app.netlify.app)  
🟣 Server: [https://y-flame-eight-20.vercel.app](https://y-flame-eight-20.vercel.app)

---

## 🚀 Features

- 🛠️ RESTful API with CRUD operations  
- 📦 MongoDB integration via Mongoose  
- 🔐 Environment variables using dotenv  
- 🌐 CORS for secure cross-origin requests  
- 🧩 Organized, scalable backend structure  

---

## 🧰 Tech Stack

| Technology | Description |
|------------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | JavaScript runtime |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | Server framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) | NoSQL database |
| ![dotenv](https://img.shields.io/badge/dotenv-8DD6F9?style=for-the-badge&logo=dotenv&logoColor=black) | Environment config |
| ![CORS](https://img.shields.io/badge/CORS-enabled-blue?style=for-the-badge) | Middleware for cross-origin requests |

---

## 📁 API Endpoints

| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| GET    | `/group/all`           | Get all groups                           |
| GET    | `/group/latest`        | Get today’s groups (latest 6)            |
| GET    | `/group/email/:email`  | Get groups by user email                 |
| GET    | `/group/id/:id`        | Get single group by ID                   |
| POST   | `/group`               | Create new group                         |
| PUT    | `/group/id/:id`        | Update group by ID                       |
| DELETE | `/group/id/:id`        | Delete group by ID                       |
| GET    | `/`                    | Root route for server check              |

---
## 📦 Dependencies

```bash
express
cors
dotenv
mongodb
