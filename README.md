# 🎬 Movie App

This project is a full-stack **Movie Application** built with **React (frontend)** and **Node.js/Express (backend)**.  
You can run it locally using Node or containerize it using **Docker**.

---

## 🗂️ Project Structure

```
demo/
│
├── movie/              # Frontend (React)
└── movies-backend/      # Backend (Node.js + Express + Dockerfile)
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd demo
```

---

## 🎭 Run Frontend (React)

### Install dependencies
```bash
cd movie
npm install
```

### Run the app
```bash
npm start
```

Your frontend should now be running on 👉 **http://localhost:3000**

---

## 🎬 Run Backend (Node.js / Express)

### Install dependencies
```bash
cd ../movie-backend
npm install
```

### Run the app
```bash
npm start
```

The backend should now be running on 👉 **http://localhost:3001**

---

## 🐳 Run Backend with Docker

Make sure you have **Docker** installed and running.

### Build Docker image
```bash
cd movie-backend
docker build -t movie-backend .
```

### Run container
```bash
docker run -d -p 3001:3001 movie-backend
```

✅ The backend will be available at **http://localhost:5000**

---

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).


## Tutorials

---

## 📚 Full Tutorial

You can see the full tutorial on how to build this app from scratch here:

- 🎥 **YouTube Video:** [Watch on YouTube](https://youtu.be/8WRNiRpMxj4)
- 📝 **Blog Post:** [Read on My Blog](https://thecodingheaven.com/posts/intro-to-docker)

---
