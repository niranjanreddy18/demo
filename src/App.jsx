import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import QuoteModal from './components/QuoteModal'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import { useState } from 'react'

export default function App() {
  const [toast, setToast] = useState(null)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState('')

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  const openQuote = (product = '') => {
    setQuoteProduct(product)
    setQuoteOpen(true)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar openQuote={openQuote} />
      <Routes>
        <Route path="/" element={<Home openQuote={openQuote} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products openQuote={openQuote} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact showToast={showToast} />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer openQuote={openQuote} />
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      {quoteOpen && (
        <QuoteModal
          product={quoteProduct}
          onClose={() => setQuoteOpen(false)}
          showToast={showToast}
        />
      )}
    </BrowserRouter>
  )
}
