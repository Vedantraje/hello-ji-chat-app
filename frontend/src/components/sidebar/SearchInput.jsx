import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearch = search.trim();

    if (!trimmedSearch) return;
    if (trimmedSearch.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(trimmedSearch.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-full bg-gray-800/40 rounded-full p-1 border border-gray-600 focus-within:border-sky-500 transition"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="flex-1 px-4 py-2 text-sm md:text-base bg-transparent text-white placeholder-gray-400 focus:outline-none"
      />

      <button
        type="submit"
        aria-label="Search"
        className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition text-white flex items-center justify-center"
      >
        <IoSearchSharp className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchInput;
