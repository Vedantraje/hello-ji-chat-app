import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 text-sm md:text-base rounded-full bg-gray-800/30 border border-gray-600 
             text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
      />

      <button
        type="submit"
        className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition 
                   text-white flex items-center justify-center"
      >
        <IoSearchSharp className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchInput;
