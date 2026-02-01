export default function EraLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <div className="relative py-24 md:py-36 min-h-[60vh] flex items-center bg-[#1a1a2e]">
        <div className="container-custom">
          <div className="max-w-4xl space-y-6">
            <div className="w-32 h-8 bg-white/10 rounded-full animate-pulse" />
            <div className="w-96 h-16 bg-white/10 rounded-lg animate-pulse" />
            <div className="w-72 h-12 bg-white/10 rounded-lg animate-pulse" />
            <div className="w-full max-w-2xl h-24 bg-white/10 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-16 bg-[#0f0f1a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-lg animate-pulse" />
                  <div className="flex-1 h-8 bg-white/10 rounded-lg animate-pulse" />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-white/5 rounded-2xl animate-pulse" />
              <div className="h-48 bg-white/5 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery skeleton */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="w-64 h-10 bg-white/10 rounded-lg mx-auto animate-pulse" />
            <div className="w-48 h-6 bg-white/10 rounded-lg mx-auto mt-4 animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-white/5 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
