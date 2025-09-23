import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

import "remixicon/fonts/remixicon.css";
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container mx-auto p-4">
      <Navbar />
      <App />
      <Footer/>
    </div>
  </StrictMode>,
)
