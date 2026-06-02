import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    q: 'What sizes of cement blocks are available?',
    a: 'We offer cement blocks in multiple standard sizes: 4"×8"×16", 6"×8"×16", and 8"×8"×16". Custom sizes may be available for bulk orders — please contact us to discuss your requirements.'
  },
  {
    q: 'Do you provide delivery to project sites?',
    a: 'Yes, we provide delivery to construction sites in Puthalapattu, Chittoor district, and surrounding areas in Andhra Pradesh. Delivery charges may apply depending on the distance and quantity. Contact us for delivery pricing.'
  },
  {
    q: 'Can I place a bulk order?',
    a: 'Absolutely. We are equipped to handle large bulk orders for commercial, residential, and industrial projects. Bulk orders receive special pricing. Please get in touch via phone or our contact form to discuss your requirement.'
  },
  {
    q: 'What areas do you serve?',
    a: 'We primarily serve Puthalapattu, Chittoor, Tirupathi, and the surrounding districts of Andhra Pradesh. Our location on the Tirupathi–Bengaluru Highway makes logistics convenient for a wider region. Contact us for availability in your area.'
  },
  {
    q: 'How can I request a quote?',
    a: 'You can request a quote by calling us at +91 9160171151 or +91 9090223330, emailing sribalajicementblocks@gmail.com, or filling out the quote request form on this website. We typically respond within 24 hours.'
  },
  {
    q: 'Are your blocks compliant with IS standards?',
    a: 'Yes, our cement blocks are manufactured to comply with IS 2185 standards for concrete masonry units. We conduct regular quality checks to ensure consistent strength, dimensions, and durability across all our products.'
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'We accept orders of all sizes, from small residential projects to large commercial builds. However, for delivery, a minimum quantity may be required. Please call us to discuss your specific needs.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, NEFT/RTGS bank transfers, and UPI payments. Payment terms for bulk orders can be discussed at the time of order placement. A GST invoice is provided for all transactions (GST: 37CRRPM9679R1Z2).'
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-cement-200">
      <button
        className="w-full text-left flex items-start justify-between gap-4 py-5 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-heading text-lg font-bold uppercase text-cement-900 group-hover:text-cement-600 transition-colors">{q}</span>
        <span className="mt-1 shrink-0 text-cement-600">
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {open && (
        <div className="pb-5 -mt-1">
          <p className="text-cement-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="pt-28">
      <section className="bg-cement-900 text-white py-16 px-6 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-400 mb-3">Help Center</p>
        <h1 className="font-heading text-5xl md:text-6xl font-black uppercase">FAQs</h1>
        <p className="mt-4 text-cement-300 max-w-xl mx-auto">Common questions about our products and services</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-16 bg-cement-50 p-8 text-center">
          <h3 className="font-heading text-2xl font-bold uppercase text-cement-900 mb-3">Still Have Questions?</h3>
          <p className="text-cement-500 text-sm mb-6">Call us directly or send us an email — we're happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919160171151" className="bg-cement-900 text-white px-6 py-3 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-700 transition-colors">
              Call Now
            </a>
            <a href="mailto:sribalajicementblocks@gmail.com" className="border-2 border-cement-900 text-cement-900 px-6 py-3 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-900 hover:text-white transition-colors">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
