export default function FinancialTips() {
  return (
    <div className="w-full px-5 mt-8 pb-28">
      <div className="w-full rounded-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 px-5 py-5 flex items-center gap-4 shadow-lg shadow-blue-500/20">
        {/* Lightbulb Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-700/40 flex items-center justify-center backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          >
            <path d="M9 18h6v-2H9v2zm3-14a6 6 0 0 0-4 10.46V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.54A6 6 0 0 0 12 4z" />
            <rect x="9" y="19" width="6" height="1" rx="0.5" />
            <rect x="10" y="21" width="4" height="1" rx="0.5" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-base font-bold text-white leading-snug">
            Tips Finansial
          </h3>
          <p className="text-sm text-white/70 mt-0.5">
            Mau buka usaha/UMKM apa?
          </p>
        </div>
      </div>
    </div>
  );
}
