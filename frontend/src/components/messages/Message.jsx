import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message?.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "justify-end" : "justify-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleStyles = fromMe
    ? "bg-blue-500 text-white rounded-br-none"
    : "bg-gray-200 text-gray-900 rounded-bl-none";

  const shakeClass = message.shouldShake ? "animate-shake" : "";

  return (
    <div className={`flex items-end gap-2 my-2 ${chatClassName}`}>
      {/* Avatar for other user */}
      {!fromMe && (
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="User avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      )}

      {/* Message bubble */}
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl ${bubbleStyles} ${shakeClass}`}
      >
        <p className="break-words">{message?.message}</p>
        <span className="block text-xs text-gray-300 mt-1">
          {formattedTime}
        </span>
      </div>

      {/* Avatar for my messages */}
      {fromMe && (
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="My avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Message;
