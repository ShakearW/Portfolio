// Import React (not strictly required in React 17+, but harmless if you keep it)
import React from 'react'

// Import the modern React DOM renderer from React 18+
import ReactDOM from 'react-dom/client'

// Import the BrowserRouter component to enable routing in the app
import { BrowserRouter } from 'react-router-dom'

// Import your main App component
import App from './App'

// Import your global stylesheet
import './index.css'

// Get the <div id="root"> element from the HTML file
// "as HTMLElement" tells TypeScript that this element will never be null
const rootElement = document.getElementById('root') as HTMLElement

// Create a React root and render your app inside it
ReactDOM.createRoot(rootElement).render(
  // StrictMode helps catch potential problems in development
  <React.StrictMode>
    {/* Wrap the entire app in BrowserRouter so routing works */}
    <BrowserRouter>
      {/* Render your App component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)