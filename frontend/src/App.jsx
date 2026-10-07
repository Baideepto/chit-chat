import { Routes, Route } from "react-router";
import Chatpage from "./pages/Chatpage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
import { useAuthStore } from "./store/useAuthStore.js";

function App() {
  const { authUser, login, isLoggedIn } = useAuthStore();
  console.log("Auth User:", authUser);
  console.log("Is Logged In:", isLoggedIn);

  return (
    <div className="min-h-screen bg-slate-950 relative flex items-center justify-center p-4 overflow-hidden ">
      
      {/* ....page_design....... */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dynamic Glowing Ambient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/10 blur-[120px] animate-pulse [animation-delay:2s]" />
        
        {/* Futuristic Subtle Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #4f46e5 1px, transparent 1px),
              linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        />

        {/* Diagonal Light Streaks */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-indigo-500/5 to-transparent skew-y-12 scale-150 transform-gpu" />
      </div>

      <button
        onClick={login}
        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10 shadow-lg shadow-indigo-600/30 transition-all"
      >
        Login
      </button>

      <div className="z-10 w-full max-w-6xl">
        <Routes>
          <Route path="/" element={<Chatpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
