import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [newMessage, setNewMessage] = useState(null);
  const [unreadConversations, setUnreadConversations] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    let newSocket;
    if (authUser?._id) {
      newSocket = io(import.meta.env.VITE_BACKEND_URL, {
        query: { userId: authUser._id },
        withCredentials: true,
      });

      setSocket(newSocket);

      // ✅ Track online users
      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // ✅ Listen for real-time messages
      newSocket.on("newMessage", (message) => {
        console.log("📩 New message received:", message);
        setNewMessage(message);

        // 🔔 Play notification sound
        const audio = new Audio("/sounds/notification.mp3");
        console.log(audio, "audio");
        audio.play().catch((err) => console.warn("Sound play blocked", err));

        // 🆕 Mark conversation as unread
        setUnreadConversations((prev) => {
          if (!prev.includes(message.senderId)) {
            return [...prev, message.senderId];
          }
          return prev;
        });
      });
    }

    return () => {
      if (newSocket) {
        newSocket.disconnect();
        setSocket(null);
      }
    };
  }, [authUser]);

  // ✅ Clear unread when opening a conversation
  const markAsRead = (conversationId) => {
    setUnreadConversations((prev) =>
      prev.filter((id) => id !== conversationId)
    );
  };

  return (
    <SocketContext.Provider
      value={{
        socket,
        onlineUsers,
        newMessage,
        unreadConversations,
        markAsRead,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
