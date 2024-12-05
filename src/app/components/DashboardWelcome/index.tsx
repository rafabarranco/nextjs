'use client';

import { useSession } from 'next-auth/react';

export default function DashboardWelcome() {
  const { data: session } = useSession();
  return (
    <h1 className="mb-4 text-xl font-bold first-letter:uppercase">
      Welcome to Dashboard, {session?.user?.name}
    </h1>
  );
}
