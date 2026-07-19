import type { Metadata } from 'next';
import LoginPage from '../../views/LoginPage';

export const metadata: Metadata = {
  title: 'Sign In or Create Account',
  description:
    'Sign in to ChatCV to access your resumes, use AI features, and download your professional PDF CV.',
};

export default function LoginRoute() {
  return <LoginPage />;
}
