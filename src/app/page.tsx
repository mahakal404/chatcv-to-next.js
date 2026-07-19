import type { Metadata } from 'next';
import LandingPage from '../views/LandingPage';

export const metadata: Metadata = {
  title: 'Free AI Resume Builder & ATS-Friendly CV Maker | ChatCV',
  description:
    "Stop struggling with formatting and writer's block. Build a professional, ATS-friendly resume in minutes using ChatCV's free online resume builder or by chatting with our AI.",
};

export default function HomePage() {
  return <LandingPage />;
}
