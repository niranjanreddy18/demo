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
import Admin from './pages/Admin'
import { products as defaultProducts } from './data/productsData'
import { useState, useEffect } from 'react'

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'cement123'
}

export default function App() {
  const [toast, setToast] = useState(null)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState('')
  const [adminAuthenticated, setAdminAuthenticated] = useState(() => localStorage.getItem('adminAuth') === 'true')

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('siteProducts')
    return saved ? JSON.parse(saved) : defaultProducts
  })
  const [phoneNumbers, setPhoneNumbers] = useState(() => {
    const saved = localStorage.getItem('sitePhoneNumbers')
    return saved ? JSON.parse(saved) : ['+91 9160171151', '+91 9090223330']
  })

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  const openQuote = (product = '') => {
    setQuoteProduct(product)
    setQuoteOpen(true)
  }

  useEffect(() => {
    localStorage.setItem('siteProducts', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    localStorage.setItem('sitePhoneNumbers', JSON.stringify(phoneNumbers))
  }, [phoneNumbers])

  const productOptions = products
    .filter(product => product.available !== false)
    .map(product => product.name)

  const saveAdminSettings = ({ products: updatedProducts, phoneNumbers: updatedNumbers }) => {
    setProducts(updatedProducts)
    setPhoneNumbers(updatedNumbers.length ? updatedNumbers : phoneNumbers)
    showToast('Admin settings saved successfully.')
  }

  const loginAdmin = ({ username, password }) => {
    const success = username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
    if (success) {
      setAdminAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
      showToast('Admin login successful.')
    }
    return success
  }

  const logoutAdmin = () => {
    setAdminAuthenticated(false)
    localStorage.removeItem('adminAuth')
    showToast('Admin logged out.')
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar openQuote={openQuote} phoneNumbers={phoneNumbers} />
      <Routes>
        <Route path="/" element={<Home openQuote={openQuote} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products openQuote={openQuote} products={products} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact showToast={showToast} phoneNumbers={phoneNumbers} productOptions={productOptions} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/admin"
          element={
            <Admin
              products={products}
              phoneNumbers={phoneNumbers}
              onSave={saveAdminSettings}
              adminAuthenticated={adminAuthenticated}
              onLogin={loginAdmin}
              onLogout={logoutAdmin}
            />
          }
        />
      </Routes>
      <Footer openQuote={openQuote} phoneNumbers={phoneNumbers} />
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      {quoteOpen && (
        <QuoteModal
          product={quoteProduct}
          productTypes={productOptions}
          onClose={() => setQuoteOpen(false)}
          showToast={showToast}
        />
      )}
    </BrowserRouter>
  )
}
