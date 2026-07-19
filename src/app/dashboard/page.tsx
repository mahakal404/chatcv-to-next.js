import type { Metadata } from 'next';
import DashboardPage from '../../views/DashboardPage';

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Manage all your resumes in one place. Create, edit, and download your professional CVs from your ChatCV dashboard.',
};

export default function DashboardRoute() {
  return <DashboardPage />;
}
