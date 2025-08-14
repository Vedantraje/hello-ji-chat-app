import React from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-gray-900 text-white w-full max-w-xs border-r border-gray-800">
      {/* Search */}
      <div className="p-4 border-b border-gray-800">
        <SearchInput />
      </div>

      {/* Conversations list */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <Conversations />
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800 bg-gray-900 sticky bottom-0">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
