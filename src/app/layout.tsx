import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { AuthProvider } from '../context/AuthContext';
import ClaimGiftModalWrapper from '../components/ClaimGiftModalWrapper';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ChatCV — Free AI Resume Builder & ATS-Friendly CV Maker',
    template: '%s | ChatCV',
  },
  description:
    'Build a professional, ATS-friendly resume in minutes with ChatCV. Use our free online resume builder or chat with our AI to create the perfect CV instantly.',
  keywords: [
    'free resume builder',
    'AI resume builder',
    'ATS friendly CV',
    'online CV maker',
    'ChatCV',
  ],
  openGraph: {
    title: 'ChatCV — Free AI Resume Builder',
    description:
      'Build a professional ATS-friendly resume in minutes. Free, no watermarks, instant PDF export.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Toaster position="top-center" richColors />
          <ClaimGiftModalWrapper />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
