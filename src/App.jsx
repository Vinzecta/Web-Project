import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header/Header'
import Footer from './Components/footer/footer'
import Hero from "./Components/Hero/Hero"
import Banner from "./Components/Banner/Banner"
import Image1 from "./assets/image-1.jpg"

function App() {
  return (
    <>
      <Header />
      <Banner welcome={"Welcome to Ceramic Shop"} 
              title={"Evaluate your space with Ceramic Elegence"}
              content={"Starting from just $149.00"}
              image={Image1}
              button={"Shop Now!"}
              />
      <Hero />
      <Footer />
    </>
  )
}

export default App
