const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: true });
const path = require("path");

let allUsers = {};

app.use(express.static(path.join(__dirname, "dist")));

// Serve index.html for all routes (for single-page applications)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("join-user", (username) => {
    console.log("connected user", username);
    allUsers[username] = { username, id: socket.id };
    io.emit("joined", allUsers);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id, allUsers);
    for (const property in allUsers) {
      if (allUsers[property].id == socket.id) {
        delete allUsers[property];
      }
      io.emit("joined", allUsers);
    }
  });
  socket.on("offer", ({ from, to, offer }) => {
    io.to(allUsers[to].id).emit("offer", { from, to, offer });
  });
  socket.on("answer", ({ from, to, answer }) => {
    io.to(allUsers[from].id).emit("answer", { from, to, answer });
  });
  socket.on("end-call", ({ from, to }) => {
    io.to(allUsers[to].id).emit("end-call", { from, to });
  });
  socket.on("icecandidate", (candidate) => {
    socket.broadcast.emit("icecandidate", candidate);
  });
  socket.on("call-ended", (caller) => {
    const [from, to] = caller;
    io.to(allUsers[from]?.id).emit("call-ended", caller);
    io.to(allUsers[to]?.id).emit("call-ended", caller);
  });
});
server.listen(8080, () => {
  console.log("Server started on port 8080");
});
