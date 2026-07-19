import type { Metadata } from 'next';
import AIBuilderPage from '../../views/AIBuilderPage';

export const metadata: Metadata = {
  title: 'Magic AI Builder',
  description:
    'Our next-generation AI resume builder is in training. In the meantime, use our powerful standard editor to craft your perfect CV.',
};

export default function AIBuilderRoute() {
  return <AIBuilderPage />;
}
