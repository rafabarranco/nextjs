'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

import ThemeToggle from '@/app/components/ThemeToggle';

export default function Header() {
  const { data: session, status } = useSession();
  if (status === 'unauthenticated' || status === 'loading') return;
  return (
    <nav>
      <div>{session?.user?.name}</div>
      <Image
        src={session?.user?.image as string}
        alt="Avatar"
        width={72}
        height={72}
      />
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
      <ThemeToggle />
    </nav>
  );
}
