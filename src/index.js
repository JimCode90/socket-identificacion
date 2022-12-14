import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./socket.js";
import app from "./app.js";
import { PORT } from "./config.js";

const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log("Server on http://localhost:", PORT);

const io = new WebSocketServer(httpServer,{
    allowEIO3: true,
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials:true
    }
});

Sockets(io);
