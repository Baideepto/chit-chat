import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer.jsx";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";

const SignUpPage = ()=>{
  const [formData,setFormData] = useState({username:"",email:"",password:""});
  const {signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e)=>{
    e.preventDefault();
    signup(formData);
  }


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
                    Create an Account
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">
                    Join our community and start chatting!
                  </p>
                </div>

                {/** Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="auth-input-label">Full Name</label>
                    <div className="relative">
                      <UserIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                        className="input"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
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
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <LoaderIcon className="animate-spin h-5 w-5 mr-2" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                  <div className="text-sm text-slate-400 text-center">
                    <Link to="/login" className="auth-link">
                      Already Have an account? Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradiet-to-bl from-slate-800/20 to-transparent">
            <div>
              <img src="/Tom_and_Jerry.png" alt="Tom and jerry are chatting" className="w-full h-400px object-contain" />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-medium text-cyan-400"> Start Your Journey Today With Our Chatting Community</h3>
                <div className="mt-4 flex justify-center gap-4">
                  <span className="auth-badge">Free</span>
                  <span className="auth-badge">Easy Setup</span>
                  <span className="auth-badge">Private</span>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}

export default SignUpPage;
