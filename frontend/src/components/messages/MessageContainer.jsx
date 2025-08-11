import React from "react";
import { useEffect } from "react";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-gray-800 px-4 py-3 flex items-center">
            <span className="text-gray-300 mr-2">To:</span>
            <span className="text-white font-semibold">
              {selectedConversation.fullName}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <div className="border-t border-gray-700">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
