import React from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers, unreadConversations, markAsRead } = useSocketContext();
  const isUnread = unreadConversations.includes(conversation._id);
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation.userId?.toString());

  return (
    <>
      <div
        onClick={() => {
          setSelectedConversation(conversation);
          markAsRead(conversation._id);
        }}
        className={`flex gap-2 items-center p-2 rounded cursor-pointer transition-colors duration-200
    ${
      isSelected ? "bg-sky-500" : isUnread ? "bg-sky-600" : "hover:bg-sky-400"
    }`}
      >
        {/* Avatar */}
        <div className="avatar relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
            <img
              src={conversation.profilePic}
              alt="user avatar"
              className="object-cover w-full h-full"
            />
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>

        {/* Name + Emoji */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-100">
              {conversation.fullName}
            </p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-[1px] bg-gray-700" />}
    </>
  );
};

export default Conversation;
