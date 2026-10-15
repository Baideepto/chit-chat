import { useState } from "react";
import { Link } from "react-router";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  LoaderIcon,
} from "lucide-react";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer.jsx";
import { useAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full flex items-center justify-center bg-slate-900 text-white p-4">
      <BorderAnimatedContainer>
        {/* <div className=" w-full max-w-4xl md:h-[650px] h-auto overflow-hidden bg-slate-900 rounded-xl"> */}
        <div className="flex w-full flex-col md:flex-row p-6">
          <div className="w-full flex flex-col md:flex-row">
            {/* Left Side (Form): Added md:flex-1 to ensure it takes up exactly 50% width */}
            <div className="md:w-1/2 p-8 flex justify-center items-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <MessageCircleIcon className="mx-auto h-12 w-12 text-indigo-500" />
                  <h2 className="mt-2 text-3xl font-extrabold text-white">
                    Welcome Back
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Login to access to your account
                  </p>
                </div>

                {/** Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="auth-input-label">Email Address</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <button
                    className="auth-button"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="animate-spin h-5 w-5 mr-2" />
                    ) : (
                      "Login/Signin"
                    )}
                  </button>
                  <div className="text-sm text-slate-400 text-center">
                    <Link to="/signup" className="auth-link">
                      Don't you have an account? Sign Up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradiet-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/Tom_and_Jerry.png"
                  alt="Tom and jerry are chatting"
                  className="w-full h-400px object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">
                    Connect Anytime, Anywhere
                  </h3>
                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Secure</span>
                    <span className="auth-badge">Fast</span>
                    <span className="auth-badge">Reliable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BorderAnimatedContainer>
    </div>
  );
};

export default LoginPage;
