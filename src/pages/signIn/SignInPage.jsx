import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: connect to backend auth
    console.log('Email:', email, 'Password:', password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-200">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-red-700">Sign In</h2>
        <p className="text-sm text-center text-neutral-500">
          Welcome back! Please enter your details.
        </p>

        <form className="space-y-5" onSubmit={handleSignIn}>
          <div className="flex flex-col">
            <label className="text-sm text-neutral-600 mb-1">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-neutral-600 mb-1">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-red-700 text-white font-semibold rounded-xl hover:bg-red-600 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-center gap-3">
          <span className="w-16 h-px bg-neutral-300"></span>
          <p className="text-sm text-neutral-500">OR</p>
          <span className="w-16 h-px bg-neutral-300"></span>
        </div>

        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 py-3 border rounded-xl text-neutral-700 hover:bg-red-50 transition">
            <FaGoogle className="text-red-500" /> Sign in with Google
          </button>
          <button className="flex items-center justify-center gap-3 py-3 border rounded-xl text-neutral-700 hover:bg-blue-50 transition">
            <FaFacebook className="text-blue-700" /> Sign in with Facebook
          </button>
        </div>

        <p className="text-center text-sm text-neutral-500">
          Don't have an account?{" "}
          <Link to="/signUp" className="text-red-700 font-semibold hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  )
}

export default SignIn;
