'use client';

import { useAuth } from '../context/AuthContext';
import ClaimGiftModal from './ClaimGiftModal';

/**
 * Thin client wrapper so the Server Component layout.tsx can
 * mount ClaimGiftModal without knowing the `user` directly.
 * It reads `user` from AuthContext internally.
 */
export default function ClaimGiftModalWrapper() {
  const { user } = useAuth();
  return <ClaimGiftModal user={user} />;
}
