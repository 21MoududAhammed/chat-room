import { useEffect } from "react";
import { createConnection } from "../Chat";


export default function useChatRoom({serverUrl,roomId, onReceiveMessage}){
    useEffect(() => {
        const options = {
          serverUrl: serverUrl,
          roomId: roomId
        };
        const connection = createConnection(options);
        connection.on('message', (msg) => {
          onReceiveMessage(msg);
        });
        connection.connect();
        return () => connection.disconnect();
      }, [roomId, serverUrl, onReceiveMessage]);
}