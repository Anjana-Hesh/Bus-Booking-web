import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Connect to backend to register user
    console.log('Email:', email, 'Password:', password);
    
    // Navigate to sign in page after signup
    navigate('/signin');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-200">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-red-700">Sign Up</h2>
        <p className="text-sm text-center text-neutral-500">
          Create a new account to book your bus tickets.
        </p>

        <form className="space-y-5" onSubmit={handleSignUp}>
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

          <div className="flex flex-col">
            <label className="text-sm text-neutral-600 mb-1">Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-red-700 text-white font-semibold rounded-xl hover:bg-red-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link to="/signIn" className="text-red-700 font-semibold hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  )
}

export default SignUp;
