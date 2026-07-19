'use client';

import dynamic from 'next/dynamic';

// Disable SSR for the PDF builder to prevent Node.js crashes
const BuilderPage = dynamic(() => import('@/views/BuilderPage'), {
  ssr: false,
});

export default function BuilderRoute() {
  return <BuilderPage/>;
}
