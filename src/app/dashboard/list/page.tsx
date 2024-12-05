import NobelsList from '../../components/NobelsList';

export default function ListPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className="mb-4 text-xl font-bold">Nobel Prize List</h1>
      <div className="w-full md:w-3/4 xl:w-2/3 h-3/4 border rounded-lg overflow-auto">
        <NobelsList />
      </div>
    </div>
  );
}
