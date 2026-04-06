# 📖 Live Story Builder

A real-time collaborative storytelling web app built with Node.js, Express, and Socket.IO.

Users can join from anywhere in the world and contribute sentences to a shared story that updates instantly for everyone.

---

## 🚀 Features

* ⚡ Real-time updates (WebSockets)
* 🌍 Multiplayer collaboration
* 🎨 Clean modern UI (Tailwind CSS)
* 📦 Single-file backend (`server.js`)
* 🔁 Auto-trims story to last 50 lines

---

## 🧰 Requirements

* Node.js **18 or higher** (recommended: Node 20)
* npm (comes with Node.js)

Check your version:

```bash
node -v
npm -v
```

---

## 📁 Project Structure

```
story-app/
├── server.js
└── package.json
```

---

## ⚙️ Installation

### 1. Clone or create the project

```bash
mkdir story-app
cd story-app
```

Add the files:

* `server.js`
* `package.json`

---

### 2. Install dependencies

```bash
npm install
```

This installs:

* express
* socket.io

---

## ▶️ Running the App Locally

```bash
npm start
```

You should see:

```
🚀 Running on port 3000
```

Open your browser:

```
http://localhost:3000
```

---

## 🌍 Running on the Internet

This app is **internet-ready** and works on most cloud platforms.

### Option 1: Render (Recommended)

1. Push your project to GitHub
2. Go to [https://render.com](https://render.com)
3. Create a new **Web Service**
4. Configure:

| Setting       | Value       |
| ------------- | ----------- |
| Build Command | npm install |
| Start Command | npm start   |

Render will automatically:

* Assign a port
* Provide a public URL
* Enable HTTPS

---

### Option 2: Railway

1. Go to [https://railway.app](https://railway.app)
2. Connect your GitHub repo
3. Deploy automatically

---

## 🔑 Important Notes

* The app uses:

  ```js
  process.env.PORT
  ```

  This allows it to run on cloud platforms.

* Data is stored in memory:

  * Restarting the server resets the story

---

## ⚠️ Limitations

* No database (data is temporary)
* No authentication
* No moderation/filtering

---

## 🧑‍💻 Author Notes

This project is designed to be:

* Simple to understand
* Easy to deploy
* Fun to experiment with real-time apps

---

## 🎉 Enjoy!

Start the server, open multiple tabs, and build a chaotic story with friends 😄
