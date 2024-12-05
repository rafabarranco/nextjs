'use client';

import { FixedSizeList as List } from 'react-window';

import { useNobelPrizes } from '@/app/hooks/useNobelPrizes';

export default function NobelsList() {
  const { data, isLoading, error } = useNobelPrizes();

  if (isLoading) return <p>Loading list...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const prizes = data.prizes;

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const prize = prizes[index];
    return (
      <div style={style} className="flex justify-between px-4 py-2 border-b">
        <span>{prize.year}</span>
        <span>{prize.category}</span>
        <span>{prize.laureates?.length || 0} laureates</span>
      </div>
    );
  };

  return (
    <List
      height={500}
      itemCount={prizes.length}
      itemSize={50}
      width="100%"
      className="rounded-lg"
    >
      {Row}
    </List>
  );
}
