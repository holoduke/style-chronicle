export default function ErasLoading() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero skeleton */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="w-40 h-6 bg-white/10 rounded-full mx-auto animate-pulse" />
            <div className="w-72 h-12 bg-white/10 rounded-lg mx-auto animate-pulse" />
            <div className="w-96 h-8 bg-white/10 rounded-lg mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Grid skeleton */}
      <section className="py-16 bg-[#0f0f1a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-white/5 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
