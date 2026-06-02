import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa'

export default function Toast({ msg, type = 'success', onClose }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] flex items-center gap-3 bg-white border border-cement-200 shadow-xl px-5 py-4 min-w-[300px] max-w-sm">
      {type === 'success' ? (
        <FaCheckCircle className="text-green-600 text-xl shrink-0" />
      ) : (
        <FaTimesCircle className="text-red-500 text-xl shrink-0" />
      )}
      <p className="text-cement-900 text-sm font-medium flex-1">{msg}</p>
      <button onClick={onClose} className="text-cement-400 hover:text-cement-700">
        <FaTimes />
      </button>
    </div>
  )
}
