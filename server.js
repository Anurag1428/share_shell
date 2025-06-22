import { Server, Room } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport";
import express from "express";
import cors from "cors";
import http from "http";

// configure port
const port = process.env.port || 3000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// create the game server
const gameServer = new Server({
    transport: new WebSocketTransport({
        server: http.createServer(app)
    }),
});

// create a room called progami
gameServer.define("progami", Room);

// setup the public folder
app.use(express.static("public"));

// listen on the specified port
gameServer.listen(port);