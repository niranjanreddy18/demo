import { useState } from 'react'
import { galleryImages } from '../data/galleryData'
import GalleryModal from '../components/GalleryModal'
import { FaExpand } from 'react-icons/fa'

export default function Gallery() {
  const [modalIdx, setModalIdx] = useState(null)

  return (
    <main className="pt-28">
      <section className="bg-cement-900 text-white py-16 px-6 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-cement-400 mb-3">Visual Tour</p>
        <h1 className="font-heading text-5xl md:text-6xl font-black uppercase">Gallery</h1>
        <p className="mt-4 text-cement-300 max-w-xl mx-auto">A look at our facility, products, and completed projects</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => setModalIdx(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <FaExpand className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-heading font-bold text-sm uppercase tracking-wider">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-cement-400 text-sm mt-10 font-heading uppercase tracking-widest">
          All images from Sri Balaji Cement Blocks facility, Puthalapattu, A.P.
        </p>
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
