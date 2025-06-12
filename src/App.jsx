import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header/Header'
import Footer from './Components/footer/footer'
import Hero from "./Components/Hero/Hero"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default App
