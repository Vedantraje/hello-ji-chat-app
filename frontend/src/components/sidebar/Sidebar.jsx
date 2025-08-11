import React from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      <div className="p-4 border-b border-gray-700">
        <SearchInput />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Conversations />
      </div>
      <div className="p-4 border-t border-gray-700">
        <LogoutButton />
      </div>
    </div>
  );
};
export default Sidebar;
