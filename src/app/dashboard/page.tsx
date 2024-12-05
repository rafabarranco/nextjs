import Link from 'next/link';

import Chart from '../components/Chart';
import DashboardWelcome from '../components/DashboardWelcome';

export default function DashboardPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <DashboardWelcome />
      <div className="w-full md:w-3/4 xl:w-2/3">
        <Chart />
      </div>
      <div className="mt-6">
        <Link href="/dashboard/list" className="text-blue-500 hover:underline">
          Go to Nobel Prize List
        </Link>
      </div>
    </div>
  );
}
