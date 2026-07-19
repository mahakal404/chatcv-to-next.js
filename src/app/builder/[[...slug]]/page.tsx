'use client';

/**
 * Builder route must be a Client Component because dynamic() with ssr:false
 * is not allowed in Server Components (Next.js 15 rule).
 *
 * SEO metadata is intentionally handled in a parent server component or
 * via Next.js metadata API from a separate server layout if needed.
 * For the builder page, the SEO benefit is minimal (it's an authenticated tool).
 */
import dynamic from 'next/dynamic';

const BuilderPage = dynamic(
  () => import('../../../views/BuilderPage'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600" />
      </div>
    ),
  }
);

export default function BuilderRoute() {
  return <BuilderPage />;
}
