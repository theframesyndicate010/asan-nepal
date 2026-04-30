import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from './ErrorBoundary.jsx'

const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter

// Component to add scroll animations class
const ScrollAnimationsProvider = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add('has-scroll-animations')
  }, [])
  
  return children
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <ScrollAnimationsProvider>
          <App />
        </ScrollAnimationsProvider>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)