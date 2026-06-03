import { useEffect, useState } from 'react'
import { FaPlus, FaSave, FaTrash, FaPhone, FaToggleOn, FaToggleOff, FaSignOutAlt, FaLock } from 'react-icons/fa'

export default function Admin({ products = [], phoneNumbers = [], onSave, adminAuthenticated = false, onLogin, onLogout }) {
  const [localProducts, setLocalProducts] = useState(products)
  const [localPhones, setLocalPhones] = useState(phoneNumbers)
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [loginError, setLoginError] = useState('')
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  useEffect(() => {
    setLocalProducts(products)
  }, [products])

  useEffect(() => {
    setLocalPhones(phoneNumbers)
  }, [phoneNumbers])

  const updateProduct = (id, field, value) => {
    setLocalProducts(current => current.map(product => (
      product.id === id ? { ...product, [field]: value } : product
    )))
  }

  const toggleProductAvailability = (id) => {
    setLocalProducts(current => current.map(product => (
      product.id === id ? { ...product, available: !(product.available !== false) } : product
    )))
  }

  const addProduct = () => {
    setLocalProducts(current => [
      ...current,
      {
        id: Date.now(),
        name: 'New Product',
        description: 'Describe the product here.',
        price: '',
        stock: 0,
        available: true,
        features: [],
        applications: [],
        sizes: [],
      }
    ])
  }

  const removeProduct = (id) => {
    setLocalProducts(current => current.filter(product => product.id !== id))
  }

  const updatePhone = (index, value) => {
    setLocalPhones(current => current.map((phone, idx) => idx === index ? value : phone))
  }

  const addPhone = () => {
    setLocalPhones(current => [...current, ''])
  }

  const removePhone = (index) => {
    setLocalPhones(current => current.filter((_, idx) => idx !== index))
  }

  const handleSave = (event) => {
    event.preventDefault()
    setSaving(true)
    onSave({
      products: localProducts,
      phoneNumbers: localPhones.filter(number => number.trim())
    })
    setTimeout(() => {
      setFeedback('Changes saved successfully.')
      setSaving(false)
    }, 200)
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    setLoginError('')
    const success = onLogin(credentials)
    if (!success) {
      setLoginError('Invalid username or password.')
    }
  }

  const handleFieldChange = (key) => (event) => {
    setCredentials(current => ({ ...current, [key]: event.target.value }))
  }

  if (!adminAuthenticated) {
    return (
      <main className="pt-28 pb-20 bg-cement-50 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md rounded-[2rem] bg-white border border-cement-200 p-10 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cement-900 text-white">
              <FaLock className="text-xl" />
            </div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-400 mb-3">Admin Login</p>
            <h1 className="font-heading text-3xl font-black uppercase text-cement-900">Secure Access</h1>
            <p className="mt-3 text-cement-500">Enter your username and password to manage products and contact numbers.</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-cement-700 mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={handleFieldChange('username')}
                className="w-full rounded-3xl border border-cement-300 bg-cement-50 px-4 py-3 text-sm outline-none focus:border-cement-700"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-cement-700 mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={handleFieldChange('password')}
                className="w-full rounded-3xl border border-cement-300 bg-cement-50 px-4 py-3 text-sm outline-none focus:border-cement-700"
              />
            </div>
            {loginError && <p className="text-sm text-red-600">{loginError}</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-cement-900 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-cement-700 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-28 pb-20 bg-cement-50 min-h-screen">
      <section className="bg-cement-900 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-400 mb-3">Admin Panel</p>
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase">Product & Contact Settings</h1>
            <p className="mt-4 text-cement-300 max-w-3xl mx-auto md:mx-0">Update product pricing, availability, and business mobile numbers in one place. Changes apply immediately across the site.</p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:bg-white/15 transition-colors"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] bg-white border border-cement-200 p-8 shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-heading text-xl font-bold uppercase text-cement-900">Product Catalog</p>
                  <p className="mt-2 text-cement-500 text-sm">Edit product names, prices, and visibility for the public shop.</p>
                </div>
                <button
                  type="button"
                  onClick={addProduct}
                  className="inline-flex items-center gap-2 rounded-full bg-cement-900 px-5 py-3 text-sm font-semibold text-white hover:bg-cement-700 transition-colors"
                >
                  <FaPlus /> Add Product
                </button>
              </div>

              <div className="mt-8 space-y-6">
                {localProducts.map((product, index) => (
                  <div key={product.id} className="rounded-[1.75rem] border border-cement-200 bg-cement-50 p-6 shadow-sm">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-cement-500 mb-2">Product #{index + 1}</label>
                          <input
                            type="text"
                            value={product.name}
                            onChange={(event) => updateProduct(product.id, 'name', event.target.value)}
                            className="w-full rounded-3xl border border-cement-300 bg-white px-4 py-3 text-sm outline-none focus:border-cement-700"
                          />
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-cement-500 mb-2">Price</label>
                            <input
                              type="text"
                              value={product.price}
                              onChange={(event) => updateProduct(product.id, 'price', event.target.value)}
                              placeholder="₹45 / block"
                              className="w-full rounded-3xl border border-cement-300 bg-white px-4 py-3 text-sm outline-none focus:border-cement-700"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-cement-500 mb-2">Stock</label>
                            <input
                              type="number"
                              min="0"
                              value={product.stock ?? 0}
                              onChange={(event) => updateProduct(product.id, 'stock', Number(event.target.value))}
                              placeholder="0"
                              className="w-full rounded-3xl border border-cement-300 bg-white px-4 py-3 text-sm outline-none focus:border-cement-700"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-cement-500 mb-2">Visibility</label>
                            <button
                              type="button"
                              onClick={() => toggleProductAvailability(product.id)}
                              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white transition-colors"
                              style={{ backgroundColor: product.available !== false ? '#111827' : '#9ca3af' }}
                            >
                              {product.available !== false ? <FaToggleOn /> : <FaToggleOff />}
                              {product.available !== false ? 'Visible' : 'Hidden'}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-cement-500 mb-2">Description</label>
                          <textarea
                            value={product.description || ''}
                            onChange={(event) => updateProduct(product.id, 'description', event.target.value)}
                            className="w-full min-h-[140px] rounded-[1.5rem] border border-cement-300 bg-white px-4 py-4 text-sm outline-none focus:border-cement-700 resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-4">
                        <button
                          type="button"
                          onClick={() => removeProduct(product.id)}
                          className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 hover:bg-red-100 transition-colors"
                        >
                          <FaTrash /> Remove
                        </button>
                        <p className="text-xs uppercase tracking-[0.3em] text-cement-500">Visible products appear on the public Products page and quote form.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white border border-cement-200 p-8 shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-heading text-xl font-bold uppercase text-cement-900">Mobile Numbers</p>
                  <p className="mt-2 text-cement-500 text-sm">These numbers display in the header, contact page, and footer.</p>
                </div>
                <button
                  type="button"
                  onClick={addPhone}
                  className="inline-flex items-center gap-2 rounded-full bg-cement-900 px-5 py-3 text-sm font-semibold text-white hover:bg-cement-700 transition-colors"
                >
                  <FaPlus /> Add Number
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {localPhones.map((phone, index) => (
                  <div key={index} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => updatePhone(index, event.target.value)}
                      placeholder="+91 9123456789"
                      className="flex-1 rounded-3xl border border-cement-300 bg-cement-50 px-4 py-3 text-sm outline-none focus:border-cement-700"
                    />
                    <button
                      type="button"
                      onClick={() => removePhone(index)}
                      className="inline-flex items-center gap-2 rounded-full border border-cement-300 bg-white px-4 py-3 text-sm font-semibold text-cement-700 hover:bg-cement-100 transition-colors"
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white border border-cement-200 p-8 shadow-lg">
              <p className="font-heading text-xl font-bold uppercase text-cement-900 mb-4">Admin Notes</p>
              <div className="space-y-4 text-sm leading-relaxed text-cement-600">
                <p>Changes are stored in browser storage. Refresh keeps your saved configuration.</p>
                <p>Hidden products remain in the catalog but are not shown to customers or quote forms.</p>
                <p>Use full international phone formatting for correct click-to-call behavior.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white border border-cement-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-cement-900 p-3 text-white"><FaPhone /></div>
                <div>
                  <p className="font-heading text-lg font-bold uppercase text-cement-900">Live Preview</p>
                  <p className="text-cement-500 text-sm">The public site uses only visible products and the first phone number for WhatsApp.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-cement-600">
                <p><span className="font-semibold text-cement-900">Visible products:</span> {localProducts.filter(p => p.available !== false).length}</p>
                <p><span className="font-semibold text-cement-900">Current phone values:</span> {localPhones.filter(Boolean).join(', ') || 'None'}</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {feedback && <p className="text-sm text-green-700">{feedback}</p>}
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-3 rounded-full bg-cement-900 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-cement-700 transition-colors disabled:opacity-60"
          >
            <FaSave /> {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </section>
    </main>
  )
}
