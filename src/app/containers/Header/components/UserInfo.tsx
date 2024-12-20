'use client';

interface UserInfoProps {
  name?: string;
}

export default function UserInfo({ name }: UserInfoProps) {
  return (
    <div className="text-lg font-semibold text-gray-800 dark:text-white first-letter:uppercase">
      {name}
    </div>
  );
}
