import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MasterLayout from './layouts/Master.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MasterLayout>
      <App />
    </MasterLayout>
  </StrictMode>,
)
