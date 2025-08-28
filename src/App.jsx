<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 👇 yaha Supabase client import karo
import { supabase } from './supabaseClient'

function App() {
  const [count, setCount] = useState(0)

  // Example: Supabase se ek simple query (users table se data)
  const fetchUsers = async () => {
    const { data, error } = await supabase.from('users').select('*')
    if (error) {
      console.error('Error:', error)
    } else {
      console.log('Users:', data)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Supabase</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={fetchUsers}>Fetch Users</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
=======
export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="GrowBot Logo" className="h-10" />
          <h1 className="text-2xl font-bold">GrowBot</h1>
        </div>
        <nav className="flex gap-6 text-lg">
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#features" className="hover:text-green-400">Features</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
          <a href="#login" className="hover:text-green-400">Login</a>
          <a href="#signup" className="hover:text-green-400">Signup</a>
        </nav>
      </header>
>>>>>>> 85ff20f23463ffc8120092b731149cd0709d13eb

      {/* Hero Section */}
      <section 
        className="h-[90vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: "url('/hero-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-2xl">
          <h2 className="text-5xl font-bold">Welcome to GrowBot</h2>
          <p className="mt-4 text-xl max-w-2xl">
            Your AI-powered currency trading assistant for smart profits and automation.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <a href="#signup" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-white">Get Started</a>
            <a href="#about" className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-xl">Learn More</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">About GrowBot</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          GrowBot introduces an advanced AI-powered trading bot designed to maximize profits in the 
          currency markets. Our system eliminates emotional bias, ensures efficiency, and leverages 
          AI to bring automated trading strategies that adapt to real market conditions.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="shadow-lg p-6 rounded-2xl hover:scale-105 transition">
            <img src="/feature-1.jpg" alt="Feature 1" className="h-40 mx-auto rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold">Eliminate Emotional Bias</h3>
            <p className="mt-2 text-gray-600">Automated trades based on logic and data, not emotions.</p>
          </div>
          <div className="shadow-lg p-6 rounded-2xl hover:scale-105 transition">
            <img src="/feature-2.jpg" alt="Feature 2" className="h-40 mx-auto rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold">High Efficiency</h3>
            <p className="mt-2 text-gray-600">Analyze data & execute trades faster than humans.</p>
          </div>
          <div className="shadow-lg p-6 rounded-2xl hover:scale-105 transition">
            <img src="/feature-3.jpg" alt="Feature 3" className="h-40 mx-auto rounded-xl mb-4" />
            <h3 className="text-2xl font-semibold">Risk Management</h3>
            <p className="mt-2 text-gray-600">AI-driven trading with minimized risk & error handling.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="mb-4">Email: <a href="mailto:support@growbot.com" className="text-green-600">support@growbot.com</a></p>
        <p>Address: 104-0170, Business Center, Dubai, UAE</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} GrowBot. All rights reserved.</p>
      </footer>
    </div>
  );
}
