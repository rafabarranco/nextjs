import NobelsList from './components/NobelsList';

export default async function ListPage() {
  const response = await fetch('https://api.nobelprize.org/v1/prize.json');
  const data = await response.json();
  const prizes = data.prizes;

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className="mb-4 text-xl font-bold">Nobel Prize List</h1>
      <div className="w-full md:w-3/4 xl:w-2/3 h-3/4 border rounded-lg overflow-auto">
        <NobelsList prizes={prizes} />
      </div>
    </div>
  );
}
