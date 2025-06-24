import { Room } from "colyseus";

export default class ChatRoom extends Room {
    onCreate(options) {
        console.log("ChatRoom created!!!!",options);
    }

    onDispose(options) {
        console.log("ChatRoom destroyed!!!!",options);
    }

    onJoin(client) {
        console.log(`client ${client.sessionId} joined the room`);
    }
    
    onLeave(client) {
        console.log(`client ${client.sessionId} left the room`);
    }

}