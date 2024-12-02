'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';

import UserInfo from './components/UserInfo';
import UserDropdown from './components/UserDropdown';

export default function Header() {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  if (status !== 'authenticated') return null;

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <nav className="bg-white dark:bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <UserInfo name={session?.user?.name as string} />
        <UserDropdown
          isOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          dropdownRef={dropdownRef}
          userImage={session?.user?.image as string}
        />
      </div>
    </nav>
  );
}
