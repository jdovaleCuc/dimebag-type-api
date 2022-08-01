import { Socket } from "socket.io";
import logger from "../../../infrastructure/utils/logger";
import { ISocket } from "./socket.interface";

class MessagesSocket implements ISocket {
    handleConnection(socket: Socket): void {
        logger.OnInfo('new client connected: ', socket.id)

        socket.on('message', (message) => {
            logger.OnInfo('new Message: ', message)
            socket.broadcast.emit('message', { from: socket.id, text: message })
        })
    }
}

export default MessagesSocket