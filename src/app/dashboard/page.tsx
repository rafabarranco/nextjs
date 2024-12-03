import { getServerSession } from 'next-auth';
import Link from 'next/link';

import Chart from './components/Chart';

export default async function DashboardPage() {
  const session = await getServerSession();
  const response = await fetch('https://api.nobelprize.org/v1/prize.json');
  const data = await response.json();
  const prizes = data.prizes;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-4 text-xl font-bold">
        Welcome to Dashboard, {session?.user?.name}
      </h1>
      <div className="w-full md:w-3/4 xl:w-2/3">
        <Chart prizes={prizes} />
      </div>
      <div className="mt-6">
        <Link href="/dashboard/list" className="text-blue-500 hover:underline">
          Go to Nobel Prize List
        </Link>
      </div>
    </div>
  );
}
