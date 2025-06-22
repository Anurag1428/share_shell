import { Server, Room } from "colyseus";

// configure port
const port = process.env.port || 3000;

// create the game server
const gameServer = new Server();

// create a room called progami
gameServer.define("progami", Room);

// listen on the specified port
gameServer.listen(port);