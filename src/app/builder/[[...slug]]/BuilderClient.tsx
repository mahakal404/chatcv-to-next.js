'use client';

import dynamic from 'next/dynamic';

const BuilderPage = dynamic(() => import('@/views/BuilderPage'), {
  ssr: false,
});

export default function BuilderClient() {
  return <BuilderPage />;
}
