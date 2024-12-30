import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='h-[100vh] bg-[#F4F4F4]'>
      <Navbar />
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
