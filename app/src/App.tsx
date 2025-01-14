import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
