import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/layouts/Login'
import Applications from './pages/layouts/Applications'
import Candidates from './pages/layouts/Candidates'
import Offers from './pages/layouts/Offers'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Applications />
    <Candidates />
    <Offers />
  </StrictMode>,
)
