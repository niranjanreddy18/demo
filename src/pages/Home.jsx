import { Link } from 'react-router-dom'
import { FaShieldAlt, FaRulerCombined, FaBolt, FaTags, FaTruck, FaBoxes, FaStar, FaQuoteLeft } from 'react-icons/fa'
import { img1, img2, img4, img5, img7, galleryImages } from '../data/galleryData'
import { useState } from 'react'
import GalleryModal from '../components/GalleryModal'

const stats = [
  { value: '10,000+', label: 'Blocks Daily' },
  { value: '500+', label: 'Projects Completed' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
]

const whyUs = [
  { icon: FaShieldAlt, title: 'Durable Products', desc: 'Made with premium raw materials to withstand the toughest conditions.' },
  { icon: FaRulerCombined, title: 'Accurate Dimensions', desc: 'Precision-moulded blocks ensure consistent sizing for every project.' },
  { icon: FaBolt, title: 'High Strength', desc: 'Superior compressive strength that meets and exceeds IS standards.' },
  { icon: FaTags, title: 'Affordable Pricing', desc: 'Competitive rates without compromising on quality or service.' },
  { icon: FaBoxes, title: 'Bulk Orders', desc: 'Capacity to handle large orders for residential and commercial projects.' },
  { icon: FaTruck, title: 'Fast Delivery', desc: 'Reliable and timely delivery across Puthalapattu and surrounding regions.' },
]

const testimonials = [
  { name: 'Ravi Kumar', role: 'Civil Contractor, Tirupathi', text: 'Excellent block quality and very timely delivery. Sri Balaji Cement Blocks has been our trusted supplier for 3 years. Never had a complaint.' },
  { name: 'Suresh Naidu', role: 'Builder, Chittoor', text: 'Very reliable supplier with competitive pricing. The blocks are uniform in size and very strong. Highly recommend for any construction project.' },
  { name: 'Anand Reddy', role: 'Homeowner, Puthalapattu', text: 'Built my compound wall with their solid blocks. Good strength and the team was very helpful with our bulk order. Satisfied with the product.' },
]

export default function Home({ openQuote }) {
  const [modalIdx, setModalIdx] = useState(null)

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-cement-950/60" />
        <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-6 pt-20">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.35em] text-cement-300 mb-4">
            Sri Balaji Cement Blocks
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            Premium Cement Blocks<br />
            <span className="text-cement-300">for Durable Construction</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
            High-quality cement blocks manufactured with precision and delivered with reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openQuote()}
              className="bg-white text-cement-900 px-8 py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-100 transition-colors"
            >
              Get a Quote
            </button>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-cement-900 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cement-300 to-transparent opacity-30" />
      </section>

      {/* Stats */}
      <section className="bg-cement-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="font-heading text-4xl md:text-5xl font-black text-cement-200">{s.value}</p>
              <p className="text-cement-400 text-sm uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-500 mb-3">Who We Are</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-cement-900 leading-tight mb-6">
            Built on Trust.<br />Built on Quality.
          </h2>
          <p className="text-cement-600 leading-relaxed mb-4">
            Sri Balaji Cement Blocks is a leading cement block manufacturer based in Puthalapattu, Andhra Pradesh. Located on the Tirupathi–Bengaluru Highway, our facility is equipped to produce high volumes of premium quality blocks for every type of construction.
          </p>
          <p className="text-cement-600 leading-relaxed mb-8">
            From compound walls to multi-storey commercial buildings, our blocks power construction across Chittoor district and beyond. We combine modern manufacturing with stringent quality checks to ensure every block meets the highest standards.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-widest text-sm text-cement-900 border-b-2 border-cement-900 pb-0.5 hover:border-cement-500 transition-colors">
            Learn More About Us
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src={img2} alt="Manufacturing facility" className="w-full h-52 object-cover" />
          <img src={img4} alt="Cement blocks" className="w-full h-52 object-cover mt-6" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cement-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-500 mb-3">Why Choose Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-cement-900">The Sri Balaji Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(item => (
              <div key={item.title} className="bg-white p-7 shadow-sm hover:shadow-md transition-shadow border-t-2 border-transparent hover:border-cement-700">
                <item.icon className="text-cement-700 text-3xl mb-4" />
                <h3 className="font-heading text-xl font-bold uppercase text-cement-900 mb-2">{item.title}</h3>
                <p className="text-cement-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-500 mb-3">Our Products</p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-cement-900">What We Manufacture</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Solid Cement Blocks', desc: 'High-strength solid blocks for walls and structural applications.', img: img5 },
              { name: 'Hollow Cement Blocks', desc: 'Lightweight hollow blocks for insulation and cost efficiency.', img: img7 },
              { name: 'Concrete Building Blocks', desc: 'IS-compliant concrete blocks for premium construction projects.', img: img4 },
            ].map(p => (
              <div key={p.name} className="group overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="overflow-hidden h-52">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 bg-white border border-cement-100">
                  <h3 className="font-heading text-xl font-bold uppercase text-cement-900 mb-2">{p.name}</h3>
                  <p className="text-cement-500 text-sm mb-4">{p.desc}</p>
                  <button
                    onClick={() => openQuote(p.name)}
                    className="text-sm font-heading font-bold uppercase tracking-wider text-cement-700 border-b border-cement-700 hover:text-cement-900 transition-colors"
                  >
                    Request Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-block bg-cement-900 text-white px-8 py-3 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-700 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-cement-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-400 mb-3">Gallery</p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-white">Our Work in Action</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div key={img.id} className="overflow-hidden cursor-pointer group" onClick={() => setModalIdx(i)}>
                <img src={img.src} alt={img.alt} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-110" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-block border-2 border-white text-white px-8 py-3 font-heading font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-cement-900 transition-colors">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-500 mb-3">Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-cement-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-cement-50 p-8 relative">
                <FaQuoteLeft className="text-cement-200 text-4xl mb-4" />
                <p className="text-cement-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cement-300 rounded-full flex items-center justify-center font-heading font-bold text-cement-900">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-cement-900 text-sm">{t.name}</p>
                    <p className="text-cement-500 text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400 text-xs" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 text-center"
        style={{ backgroundImage: `url(${img5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-cement-950/80" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-cement-300 mb-8 text-lg">
            Get a free quote today. Bulk orders welcome with competitive pricing.
          </p>
          <button
            onClick={() => openQuote()}
            className="bg-white text-cement-900 px-10 py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-100 transition-colors"
          >
            Request a Free Quote
          </button>
        </div>
      </section>

      {modalIdx !== null && (
        <GalleryModal
          images={galleryImages}
          index={modalIdx}
          onClose={() => setModalIdx(null)}
          onPrev={() => setModalIdx((modalIdx - 1 + galleryImages.length) % galleryImages.length)}
          onNext={() => setModalIdx((modalIdx + 1) % galleryImages.length)}
        />
      )}
    </main>
  )
}
