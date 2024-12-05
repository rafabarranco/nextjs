'use client';

import { FixedSizeList as List } from 'react-window';

import { useNobelPrizes } from '@/app/hooks/useNobelPrizes';

import { Prize } from '@/app/models/Prize';

interface RowProps {
  index: number;
  style: React.CSSProperties;
}

export default function NobelsList() {
  const { data, isLoading, error } = useNobelPrizes();

  if (isLoading) return <p>Loading list...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const prizes: Prize[] = data.prizes;

  const laureates = prizes.flatMap(
    (prize) =>
      prize.laureates?.map((laureate) => ({
        year: prize.year,
        category: prize.category,
        laureate: laureate,
      })) || [],
  );

  const Row = ({ index, style }: RowProps) => {
    console.log(laureates.length);
    const laureate = laureates[index];
    return (
      <div style={style} className="flex px-4 py-2 h-auto border-b">
        <div className="flex-shrink-0 w-1/6">{laureate.year}</div>
        <div className="flex-shrink-0 w-1/6 first-letter:uppercase">
          {laureate.category}
        </div>
        <div className="flex-shrink-0 w-4/6">
          {laureate.laureate.firstname} {laureate.laureate.surname}
        </div>
      </div>
    );
  };

  return (
    <List
      height={600}
      itemCount={laureates.length}
      itemSize={50}
      width="100%"
      className="rounded-lg"
    >
      {Row}
    </List>
  );
}
