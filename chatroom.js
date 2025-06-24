import { Room } from "colyseus";

export default class ChatRoom extends Room {
    onCreate(options) {
        console.log("ChatRoom created!!!!",options);
    }

    onDispose(options) {
        console.log("ChatRoom destroyed!!!!",options);
    }
}