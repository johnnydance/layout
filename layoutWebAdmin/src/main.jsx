import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LicenseInfo } from "@mui/x-license"
import App from './App.jsx'
import CombinedProviders from './contexts/index.js'
import env from './constants/enviroment.js'
import './global.css'

LicenseInfo.setLicenseKey(env?.keyMui)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
)
