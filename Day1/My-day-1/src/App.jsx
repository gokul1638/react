import { useState } from 'react'  // Remove if not using state yet
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from "./user.jsx"  // Capitalized component name, default import

function App() {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Gokul</h1>  {/* Use style prop, not color attribute */}
      <User />  {/* Now properly imported */}
    </div>
  )
}

export default App
