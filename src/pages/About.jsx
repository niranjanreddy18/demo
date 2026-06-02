import { FaMedal, FaHandshake, FaClock, FaRupeeSign } from 'react-icons/fa'
import { img2, img3, img6 } from '../data/galleryData'

const features = [
  { icon: FaMedal, title: 'Quality Products', desc: 'Every block is manufactured using carefully selected raw materials and tested to ensure superior strength and durability.' },
  { icon: FaHandshake, title: 'Trusted Service', desc: 'We have built long-term relationships with contractors, builders, and homeowners across the region through reliable service.' },
  { icon: FaClock, title: 'Timely Delivery', desc: 'Our logistics are streamlined to ensure your order reaches you on time, every time, without delays.' },
  { icon: FaRupeeSign, title: 'Competitive Pricing', desc: 'Transparent and fair pricing for all our products, with special rates available for bulk and repeat orders.' },
]

const process = [
  { step: '01', title: 'Raw Material Selection', desc: 'Premium cement, aggregates, and water are sourced and quality-checked before use.' },
  { step: '02', title: 'Precise Mixing', desc: 'Ingredients are mixed in calibrated proportions to ensure consistent strength in every batch.' },
  { step: '03', title: 'Moulding', desc: 'The concrete mix is poured into precision moulds to form blocks of exact dimensions.' },
  { step: '04', title: 'Compression', desc: 'Hydraulic compression is applied to compact the mix, increasing density and strength.' },
  { step: '05', title: 'Curing', desc: 'Blocks are cured under controlled conditions for the required period to achieve full strength.' },
  { step: '06', title: 'Quality Check', desc: 'Each batch undergoes dimensional and compressive strength checks before dispatch.' },
  { step: '07', title: 'Delivery', desc: 'Approved blocks are packed and dispatched to your site with care and efficiency.' },
]

export default function About() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="bg-cement-900 text-white py-16 px-6 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-400 mb-3">Our Story</p>
        <h1 className="font-heading text-5xl md:text-6xl font-black uppercase">About Sri Balaji</h1>
        <p className="mt-4 text-cement-300 max-w-xl mx-auto">Puthalapattu's most trusted cement block manufacturer</p>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-500 mb-3">About the Company</p>
          <h2 className="font-heading text-4xl font-black uppercase text-cement-900 mb-6 leading-tight">Manufacturing Excellence in Every Block</h2>
          <p className="text-cement-600 leading-relaxed mb-4">
            Sri Balaji Cement Blocks is strategically located at Sy.No.243/14A2, on the Tirupathi–Bengaluru Highway in Puthalapattu, Andhra Pradesh. Our facility is equipped with modern block manufacturing machinery capable of producing thousands of blocks daily.
          </p>
          <p className="text-cement-600 leading-relaxed mb-4">
            We specialize in manufacturing solid cement blocks, hollow cement blocks, and concrete building blocks that meet IS standards. Our products are widely used by contractors, builders, and homeowners for both residential and commercial projects.
          </p>
          <p className="text-cement-600 leading-relaxed">
            With a dedicated team and strict quality processes, we ensure that every block leaving our facility is dimensionally accurate, structurally strong, and ready for immediate use on site.
          </p>
        </div>
        <div className="space-y-3">
          <img src={img3} alt="Sri Balaji Cement Blocks signboard" className="w-full h-56 object-cover" />
          <img src={img2} alt="Manufacturing facility" className="w-full h-52 object-cover" />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-cement-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-black uppercase text-cement-900">Our Commitments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-cement-100 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="text-cement-700 text-2xl" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-cement-900 mb-2">{f.title}</h3>
                <p className="text-cement-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-500 mb-3">How We Work</p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-cement-900">Manufacturing Process</h2>
          </div>
          <div className="space-y-0">
            {process.map((p, i) => (
              <div key={p.step} className={`flex gap-6 items-start ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-cement-900 text-white flex items-center justify-center font-heading font-black text-lg shrink-0">
                    {p.step}
                  </div>
                  {i < process.length - 1 && <div className="w-0.5 bg-cement-200 flex-1 min-h-[40px]" />}
                </div>
                <div className={`pb-10 ${i % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                  <h3 className="font-heading text-xl font-bold uppercase text-cement-900 mb-1">{p.title}</h3>
                  <p className="text-cement-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Image */}
      <section className="bg-cement-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <img src={img6} alt="Production yard" className="w-full h-80 md:h-[420px] object-cover" />
          <p className="text-center text-cement-400 text-sm mt-4 font-heading uppercase tracking-widest">Our Production Yard — Puthalapattu, Andhra Pradesh</p>
        </div>
      </section>
    </main>
  )
}
