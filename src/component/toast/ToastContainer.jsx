export default function ToastContainer({ toasts }) {
  if (toasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-xs w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-lg px-4 py-3 shadow-lg animate-toast-in backdrop-blur text-sm font-medium ${
            toast.isBigCatch
              ? 'bg-alert-coral/90 text-white'
              : 'bg-lake-700/90 text-foam-100 border border-lake-500'
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}
