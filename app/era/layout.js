import EraTimelineWrapper from '@/components/features/EraTimelineWrapper';

export default function EraLayout({ children }) {
  return (
    <div className="min-h-screen pt-20">
      {/* Era Timeline Navigation - persists across era pages */}
      <div className="bg-[#0f0f1a] border-b border-white/10">
        <div className="container-custom">
          <EraTimelineWrapper />
        </div>
      </div>

      {/* Era page content */}
      {children}
    </div>
  );
}
