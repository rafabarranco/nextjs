'use client';
import { signIn } from 'next-auth/react';

export default function SigInView() {
  return (
    <div>
      <button
        onClick={async () => {
          const result = await signIn('github', {
            redirect: false,
            callbackUrl: '/dashboard',
          });
          console.log(result);
        }}
      >
        Sign In with GitHub
      </button>
    </div>
  );
}
