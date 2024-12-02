'use client';

import Image from 'next/image';

import DropdownMenu from './DropdownMenu';

interface UserDropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  userImage?: string;
}

export default function UserDropdown({
  isOpen,
  toggleDropdown,
  dropdownRef,
  userImage,
}: UserDropdownProps) {
  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="focus:outline-none">
        <Image
          src={userImage || '/default-avatar.png'}
          alt="Avatar"
          width={48}
          height={48}
          className="rounded-full border border-gray-300 dark:border-gray-700"
        />
      </button>
      {isOpen && <DropdownMenu />}
    </div>
  );
}
