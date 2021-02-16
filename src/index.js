const app = require("./app");

const server = app.listen(app.get("port"), () => {
  console.log(`Server listenning in http://localhost:${app.get("port")}`);
});

//Socket.io
const SocketIO = require("socket.io");

const socketIOConnection = SocketIO(server);

socketIOConnection.on("connection", (socket) => {
  console.log("new connection ", socket.id);

  socket.on("chat:message", (data) => {
    //console.log("Data: ", data);
    //socket.emit("chat:message", data);
    //Con broadcast, el evento se enviará a todos menos al emisor
    socket.broadcast.emit("chat:message", data);
  });

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});
