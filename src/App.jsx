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

export default App
