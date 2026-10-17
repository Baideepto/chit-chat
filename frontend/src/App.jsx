import { Routes, Route, Navigate } from "react-router";
import Chatpage from "./pages/Chatpage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore.js";
import PageLoader from "./components/PageLoader.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />; // Show a loading indicator while checking auth

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 text-white p-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.18] pointer-events-none z-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.25) 1px, transparent 1px),
            linear-gradient(rgba(56, 189, 248, 0.08) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.08) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 8px 8px, 8px 8px',
          backgroundPosition: 'center center'
        }}
      />

      {/* Smooth Radial Masking to keep lighting localized */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#0b0f19_75%)] pointer-events-none z-0" />

      {/* Vibrant Cosmic Glow Overlays */}
      {/* Center Core Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w:550px h:550px rounded-full bg-gradient-to-r from-sky-500/10 to-indigo-500/10 blur-[130px] pointer-events-none z-0" />
      
      {/* Top Right Cyan Light Field */}
      <div className="absolute -top-[15%] -right-[10%] w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[110px] animate-pulse pointer-events-none z-0" />
      
      {/* Bottom Left Fuchsia Flare */}
      <div className="absolute -bottom-[15%] -left-[10%] w-[500px] h-[500px] rounded-full bg-fuchsia-600/15 blur-[130px] pointer-events-none z-0" />
      <div className="relative z-10 w-full max-w-6xl flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Chatpage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster />
      </div>
    </div>
  );
}

export default App;
