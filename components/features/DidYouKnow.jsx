export default function DidYouKnow({ fact, color = '#ffb84d' }) {
  return (
    <div className="relative">
      <div
        className="relative overflow-hidden rounded-2xl p-6 md:p-8"
        style={{
          background: `linear-gradient(135deg, ${color}15, ${color}05)`
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-0 left-0 w-24 h-24 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: color }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${color}30` }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <div className="flex-1">
              <h4
                className="text-lg font-bold mb-2"
                style={{ color, fontFamily: 'Playfair Display, serif' }}
              >
                Did You Know?
              </h4>
              <p className="text-[#ccccdb] leading-relaxed">
                {fact}
              </p>
            </div>
          </div>
        </div>

        {/* Border accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
