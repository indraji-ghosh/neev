import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'
import Header from './components/ui/Header'
import { Footer } from './components/ui/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
