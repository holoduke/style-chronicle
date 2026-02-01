'use client';

import { useParams } from 'next/navigation';
import EraTimeline from './EraTimeline';

export default function EraTimelineWrapper() {
  const params = useParams();
  const eraId = params?.eraId;

  return <EraTimeline currentEraId={eraId} />;
}
