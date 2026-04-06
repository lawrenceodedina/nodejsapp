const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let story = [];

// Serve page
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>📖 Live Story Builder</title>
  <script src="/socket.io/socket.io.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gradient-to-br from-purple-900 to-black text-white min-h-screen flex items-center justify-center">

<div class="w-full max-w-2xl bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl">

  <h1 class="text-3xl font-bold mb-4 text-center">📖 Live Story Builder</h1>

  <form id="form" class="flex gap-2">
    <input id="input" maxlength="120" placeholder="Add the next sentence..."
      class="flex-1 px-4 py-2 rounded-xl text-black">
    <button class="bg-purple-500 px-4 py-2 rounded-xl">Add</button>
  </form>

  <div id="story" class="mt-6 space-y-2 max-h-96 overflow-y-auto"></div>

</div>

<script>
  const socket = io();
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const storyDiv = document.getElementById("story");

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (input.value.trim()) {
      socket.emit("add", input.value.trim());
      input.value = "";
    }
  });

  socket.on("init", data => {
    storyDiv.innerHTML = "";
    data.forEach(addLine);
  });

  socket.on("update", addLine);

  function addLine(line) {
    const p = document.createElement("p");
    p.textContent = line;
    p.className = "bg-white/20 p-2 rounded-xl";
    storyDiv.appendChild(p);
    storyDiv.scrollTop = storyDiv.scrollHeight;
  }
</script>

</body>
</html>
  `);
});

// Socket logic
io.on("connection", (socket) => {
  socket.emit("init", story);

  socket.on("add", (line) => {
    story.push(line);

    // Limit story length
    if (story.length > 50) story.shift();

    io.emit("update", line);
  });
});

// Internet-ready
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("🚀 Running on port " + PORT);
});