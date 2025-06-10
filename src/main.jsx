import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './Components/About Us/About.jsx'
import Contact from './Components/Contact Us/Contact.jsx'
import Homepage from './Components/Homepage/Homepage.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Detail from './Components/Product Detail/Detail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Detail />
  </StrictMode>,
)
