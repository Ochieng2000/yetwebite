import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Bootcamp from "./bootcamp/Bootcamp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { BsWhatsapp } from "react-icons/bs";

AOS.init({
  once: true
});

function App() {
  return (
    <div className="w-screen min-h-screen overflow-y-auto overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <ToastContainer />
      <a
        href="https://api.whatsapp.com/send?phone=254796808883&text=*Hi*"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-14 right-4 z-50 group"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110 animate-pulse">
          <BsWhatsapp className="text-4xl" />
          <span className="absolute hidden px-3 py-1 text-sm text-white bg-gray-800 rounded-lg -top-12 group-hover:block">
            Chat with us on WhatsApp!
          </span>
        </div>
      </a>
    </div>
  );
}

export default App;