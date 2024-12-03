'use client';

import { signOut } from 'next-auth/react';

import ThemeToggle from '@/app/components/ThemeToggle';

export default function DropdownMenu() {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
      <div className="py-2">
        <ThemeToggle />
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
