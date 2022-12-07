import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import Filmes from './templates/Filmes'
import Home from './templates/Home'
import Series from './templates/Series'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/filmes" element={<Filmes />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
