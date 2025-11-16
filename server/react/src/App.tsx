// Import the routing components from React Router
import { Routes, Route } from 'react-router-dom'

// Import the page components that will be shown for each route
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    // <Routes> is the container that holds all your route definitions
    <Routes>

      {/* This route renders the Home component when the user visits "/" */}
      <Route path="/" element={<Home />} />

      {/* This route renders the Details component when the user visits "/details" */}
      <Route path="/details" element={<Details />} />

    </Routes>
  )
}

export default App