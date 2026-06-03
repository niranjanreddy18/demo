import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function Footer({ openQuote, phoneNumbers = [] }) {
  const phones = phoneNumbers.length ? phoneNumbers : ['+91 9160171151', '+91 9090223330']
  const whatsappNumber = phones[0].replace(/\D/g, '')
  return (
    <footer className="bg-cement-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="mb-4">
            <p className="font-heading text-3xl font-black uppercase tracking-wide">Sri Balaji</p>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-cement-400">Cement Blocks</p>
          </div>
          <p className="font-heading text-lg text-cement-300 italic mb-4">Strong Blocks. Strong Foundations.</p>
          <p className="text-cement-400 text-sm leading-relaxed mb-6">
            Premium cement block manufacturer serving Puthalapattu and surrounding regions. Quality products built with precision and delivered with reliability.
          </p>
          <p className="text-xs text-cement-500">GST: 37CRRPM9679R1Z2</p>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-widest text-cement-300 mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2">
            {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/gallery', 'Gallery'], ['/faq', 'FAQ'], ['/contact', 'Contact'], ['/admin', 'Admin']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-cement-400 hover:text-white text-sm transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-widest text-cement-300 mb-4 text-sm">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-cement-400">
              <FaPhone className="mt-0.5 text-cement-500 shrink-0" />
              <div>
                {phones.map(number => (
                  <a key={number} href={`tel:${number.replace(/\s+/g, '')}`} className="hover:text-white block">
                    {number}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-3 text-sm text-cement-400">
              <FaEnvelope className="mt-0.5 text-cement-500 shrink-0" />
              <a href="mailto:sribalajicementblocks@gmail.com" className="hover:text-white break-all">
                sribalajicementblocks@gmail.com
              </a>
            </li>
            <li className="flex gap-3 text-sm text-cement-400">
              <FaMapMarkerAlt className="mt-0.5 text-cement-500 shrink-0" />
              <a
                //href="https://www.google.com/maps/search/?api=1&query=Sy.No.243%2F14A2%2C+Tirupathi%E2%80%93Bengaluru+Highway%2C+Puthalapattu+517124%2C+Andhra+Pradesh"
               // target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Sy.No.243/14A2, Tirupathi–Bengaluru Highway, Puthalapattu – 517124, A.P.
              </a>
            </li>
          </ul>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 text-sm font-semibold transition-colors"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-cement-800 text-center py-5 text-cement-500 text-xs">
        © {new Date().getFullYear()} Sri Balaji Cement Blocks. All rights reserved. | Puthalapattu, Andhra Pradesh
      </div>
    </footer>
  )
}
