import http from 'http'
import https from 'https'
import { Server as socketServer, Socket } from 'socket.io'

class socket extends socketServer {
    private static io: socket

    constructor(server: http.Server | https.Server) {
        super(server, {
            cors: {
                origin: '*'
            }
        })
    }

    /**
     * static getInstance
     */
    public static getInstance(httpServer?: http.Server | https.Server): socket {
        if (!socket.io) {
            socket.io = new socket(httpServer)
        }

        return socket.io
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public initializeHandlers(socketHandlers: any[]) {
        socketHandlers.forEach((handler) => {
            const namespace = socket.io.of(handler.path, (socket: Socket) => {
                handler.handler.handleConnection(socket)
            })

            if (handler.handler.middlewareImplementation) {
                namespace.use(handler.handler.middlewareImplementation)
            }
        })
    }


}

export default socket