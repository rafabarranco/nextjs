import { getServerSession } from 'next-auth';

export default async function DashboardPage() {
  const session = await getServerSession();
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Welcome to Dashboard view {session?.user?.name}</h1>
    </div>
  );
}
