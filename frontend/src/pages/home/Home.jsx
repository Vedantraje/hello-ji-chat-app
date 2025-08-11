import React from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full max-w-[90%] mx-auto 
                 h-[90vh] md:h-[80vh] bg-gray-800 rounded-xl shadow-lg overflow-hidden font-sans"
    >
      {/* Sidebar takes full width on mobile, fixed width on desktop */}
      <div className="w-full md:w-[320px] border-r border-gray-700">
        <Sidebar />
      </div>

      {/* Messages */}
      <div className="flex-1">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
