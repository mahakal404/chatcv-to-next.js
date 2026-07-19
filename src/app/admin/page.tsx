import type { Metadata } from 'next';
import AdminPage from '../../views/AdminPage';

export const metadata: Metadata = {
  title: 'Super Admin',
  description: 'ChatCV admin panel — manage users and distribute tokens.',
};

export default function AdminRoute() {
  return <AdminPage />;
}
