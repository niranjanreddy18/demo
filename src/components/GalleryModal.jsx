import { useEffect } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function GalleryModal({ images, index, onClose, onPrev, onNext }) {
  const img = images[index]

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 text-white hover:text-cement-300 text-2xl z-10">
        <FaTimes />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 text-white hover:text-cement-300 text-3xl z-10 p-2"
      >
        <FaChevronLeft />
      </button>
      <div className="max-w-4xl w-full px-16" onClick={e => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="w-full max-h-[80vh] object-contain" />
        <p className="text-center text-white font-heading text-lg mt-4 opacity-80">{img.caption}</p>
        <p className="text-center text-cement-400 text-sm">{index + 1} / {images.length}</p>
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 text-white hover:text-cement-300 text-3xl z-10 p-2"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}
