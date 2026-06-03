import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'

export default function Contact({ showToast, phoneNumbers = [], productOptions = [] }) {
  const phones = phoneNumbers.length ? phoneNumbers : ['+91 9160171151', '+91 9090223330']
  const productSelection = productOptions.length
    ? productOptions
    : ['Solid Cement Blocks', 'Hollow Cement Blocks', 'Concrete Building Blocks']
  const [form, setForm] = useState({
    name: '', phone: '', productType: '', quantity: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
      existing.push({ ...form, date: new Date().toISOString() })
      localStorage.setItem('contactSubmissions', JSON.stringify(existing))
      setForm({ name: '', phone: '', productType: '', quantity: '', message: '' })
      setErrors({})
      setSubmitting(false)
      showToast('Thank you. We will contact you shortly.')
    }, 800)
  }

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  return (
    <main className="pt-28">
      <section className="bg-cement-900 text-white py-16 px-6 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-400 mb-3">Get in Touch</p>
        <h1 className="font-heading text-5xl md:text-6xl font-black uppercase">Contact Us</h1>
        <p className="mt-4 text-cement-300 max-w-xl mx-auto">Reach out for inquiries, quotes, or just to say hello</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
        {/* Contact Info */}
        <div>
          <h2 className="font-heading text-3xl font-black uppercase text-cement-900 mb-8">Contact Information</h2>

          <div className="space-y-5 mb-10">
            {[
              {
                icon: FaPhone,
                label: 'Phone Numbers',
                content: (
                  <div>
                    {phones.map(number => (
                      <a key={number} href={`tel:${number.replace(/\s+/g, '')}`} className="block text-cement-900 hover:text-cement-600 font-semibold text-sm">
                        {number}
                      </a>
                    ))}
                  </div>
                )
              },
              {
                icon: FaEnvelope,
                label: 'Email Address',
                content: <a href="mailto:sribalajicementblocks@gmail.com" className="text-cement-900 hover:text-cement-600 font-semibold text-sm break-all">sribalajicementblocks@gmail.com</a>
              },
              {
                icon: FaMapMarkerAlt,
                label: 'Factory Address',
                content: (
                  <a
                   // href="https://www.google.com/maps/search/?api=1&query=Sy.No.243%2F14A2%2C+Tirupathi%E2%80%93Bengaluru+Highway%2C+Puthalapattu+517124%2C+Andhra+Pradesh"
                   // target="_blank"
                    rel="noopener noreferrer"
                    className="text-cement-600 text-sm leading-relaxed hover:text-cement-900"
                  >
                    Sy.No.243/14A2, Tirupathi–Bengaluru Highway,<br />Puthalapattu – 517124, Andhra Pradesh
                  </a>
                )
              },
              {
                icon: FaClock,
                label: 'Working Hours',
                content: <p className="text-cement-600 text-sm">Monday – Saturday: 8:00 AM – 6:00 PM<br />Sunday: By appointment</p>
              },
            ].map(item => (
              <div key={item.label} className="flex gap-4 p-5 bg-cement-50">
                <div className="w-10 h-10 bg-cement-900 flex items-center justify-center shrink-0">
                  <item.icon className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-heading font-bold uppercase tracking-wide text-cement-700 text-xs mb-1">{item.label}</p>
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${phones[0].replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-heading font-bold uppercase tracking-wider text-sm transition-colors"
          >
            <FaWhatsapp className="text-xl" /> Chat on WhatsApp
          </a>

          <div className="mt-8 p-5 border-l-4 border-cement-300 bg-cement-50">
            <p className="text-cement-500 text-xs uppercase tracking-widest font-semibold mb-1">GST Number</p>
            <p className="font-mono text-cement-800 font-bold">37CRRPM9679R1Z2</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="font-heading text-3xl font-black uppercase text-cement-900 mb-8">Send an Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-cement-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder="Your full name"
                className="w-full border border-cement-300 px-4 py-3 text-sm focus:outline-none focus:border-cement-700 bg-cement-50"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-cement-700 mb-1.5">Phone Number *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="10-digit mobile number"
                className="w-full border border-cement-300 px-4 py-3 text-sm focus:outline-none focus:border-cement-700 bg-cement-50"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-cement-700 mb-1.5">Product Type</label>
              <select
                value={form.productType}
                onChange={set('productType')}
                className="w-full border border-cement-300 px-4 py-3 text-sm focus:outline-none focus:border-cement-700 bg-cement-50"
              >
                <option value="">Select a product (optional)</option>
                {productSelection.map(option => (
                  <option key={option}>{option}</option>
                ))}
                <option>Mixed / Not Sure</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-cement-700 mb-1.5">Quantity Required</label>
              <input
                type="text"
                value={form.quantity}
                onChange={set('quantity')}
                placeholder="e.g. 2000 blocks"
                className="w-full border border-cement-300 px-4 py-3 text-sm focus:outline-none focus:border-cement-700 bg-cement-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-cement-700 mb-1.5">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={set('message')}
                placeholder="Your project details, delivery location, or any queries..."
                className="w-full border border-cement-300 px-4 py-3 text-sm focus:outline-none focus:border-cement-700 bg-cement-50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-cement-900 text-white py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-700 transition-colors disabled:opacity-60"
            >
              {submitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
