import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function QuoteModal({ product, productTypes = [], onClose, showToast }) {
  const productSelection = productTypes.length
    ? productTypes
    : ['Solid Cement Blocks', 'Hollow Cement Blocks', 'Concrete Building Blocks']

  const [form, setForm] = useState({
    name: '', phone: '', productType: product || '', quantity: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Valid 10-digit phone required'
    if (!form.productType) e.productType = 'Please select a product'
    if (!form.quantity.trim()) e.quantity = 'Quantity is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    try {
      const existing = JSON.parse(localStorage.getItem('quoteRequests') || '[]')
      existing.push({ ...form, date: new Date().toISOString() })
      localStorage.setItem('quoteRequests', JSON.stringify(existing))

      showToast('Quote sent successfully. We will contact you shortly.')
      onClose()
    } catch (error) {
      console.error('Quote submit failed', error)
      showToast('Failed to send quote. Please try again.', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const field = (key, label, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm font-semibold text-cement-700 mb-1">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={e => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full border border-cement-300 px-4 py-2.5 text-sm focus:outline-none focus:border-cement-600 bg-cement-50"
      />
      {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
    </div>
  )

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4" onClick={onClose}>
      <div className="bg-white w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="bg-cement-900 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase">Request a Quote</h2>
            <p className="text-cement-300 text-sm">We'll get back to you shortly</p>
          </div>
          <button onClick={onClose} className="hover:text-cement-300"><FaTimes className="text-xl" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {field('name', 'Full Name', 'text', 'Your full name')}
          {field('phone', 'Phone Number', 'tel', '10-digit mobile number')}
          <div>
            <label className="block text-sm font-semibold text-cement-700 mb-1">Product Type</label>
            <select
              value={form.productType}
              onChange={e => setForm({ ...form, productType: e.target.value })}
              className="w-full border border-cement-300 px-4 py-2.5 text-sm focus:outline-none focus:border-cement-600 bg-cement-50"
            >
              <option value="">Select a product</option>
              {productSelection.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
            {errors.productType && <p className="text-red-500 text-xs mt-1">{errors.productType}</p>}
          </div>
          {field('quantity', 'Quantity Required', 'text', 'e.g. 1000 blocks')}
          <div>
            <label className="block text-sm font-semibold text-cement-700 mb-1">Message (Optional)</label>
            <textarea
              rows={3}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Any additional details..."
              className="w-full border border-cement-300 px-4 py-2.5 text-sm focus:outline-none focus:border-cement-600 bg-cement-50 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-cement-900 text-white py-3 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-700 transition-colors disabled:opacity-60"
          >
            {submitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  )
}
