import { products } from '../data/productsData'
import { img4, img5, img7 } from '../data/galleryData'
import { FaCheckCircle } from 'react-icons/fa'

const productImages = [img5, img7, img4]

export default function Products({ openQuote }) {
  return (
    <main className="pt-28">
      <section className="bg-cement-900 text-white py-16 px-6 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-400 mb-3">What We Make</p>
        <h1 className="font-heading text-5xl md:text-6xl font-black uppercase">Our Products</h1>
        <p className="mt-4 text-cement-300 max-w-xl mx-auto">Premium cement blocks engineered for strength and precision</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {products.map((product, i) => (
            <div key={product.id} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img
                  src={productImages[i]}
                  alt={product.name}
                  className="w-full h-72 md:h-96 object-cover shadow-lg"
                />
              </div>
              <div className={`${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-500 mb-2">Product {String(i + 1).padStart(2, '0')}</p>
                <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-cement-900 mb-4">{product.name}</h2>
                <p className="text-cement-600 leading-relaxed mb-6">{product.description}</p>

                <div className="mb-6">
                  <h4 className="font-heading font-bold uppercase tracking-wider text-cement-700 text-sm mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-cement-600 text-sm">
                        <FaCheckCircle className="text-cement-700 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-heading font-bold uppercase tracking-wider text-cement-700 text-sm mb-3">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map(a => (
                      <span key={a} className="bg-cement-100 text-cement-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-heading font-bold uppercase tracking-wider text-cement-700 text-sm mb-3">Available Sizes</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(s => (
                      <span key={s} className="border border-cement-300 text-cement-600 px-3 py-1 text-xs font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openQuote(product.name)}
                  className="bg-cement-900 text-white px-8 py-3 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-700 transition-colors"
                >
                  Inquire About {product.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cement-50 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-cement-900 mb-4">Need a Custom Order?</h2>
          <p className="text-cement-500 mb-8">We handle bulk orders with competitive pricing. Contact us today for a free quotation.</p>
          <button
            onClick={() => openQuote()}
            className="bg-cement-900 text-white px-10 py-4 font-heading font-bold uppercase tracking-widest text-sm hover:bg-cement-700 transition-colors"
          >
            Request a Quote
          </button>
        </div>
      </section>
    </main>
  )
}
