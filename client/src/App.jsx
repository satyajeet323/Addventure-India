import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import Footwear from './pages/Footwear'
import Cart from './pages/Cart'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trekking-gear/footwear" element={<Footwear />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:slug" element={<Category />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
