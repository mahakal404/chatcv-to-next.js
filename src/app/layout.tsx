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
  metadataBase: new URL('https://chatcv-app.netlify.app/'),
  openGraph: {
    title: 'ChatCV | Free AI Resume Builder',
    description: 'Build a professional ATS-friendly resume in minutes.',
    url: 'https://chatcv-app.netlify.app/',
    siteName: 'ChatCV',
    images: [
      {
        url: '/cv.jpg',
        width: 1200,
        height: 630,
        alt: 'ChatCV - AI Resume Builder Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChatCV | Free AI Resume Builder',
    description: 'Build a professional ATS-friendly resume in minutes.',
    images: ['/cv.jpg'],
  },
  icons: {
    icon: '/chatcv_fevi.webp',
    apple: '/chatcv_fevi.webp',
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
