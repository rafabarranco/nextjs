'use client';

import { useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';

import { Prize } from '@/app/models/Prize';

interface NobelsListProps {
  prizes: Prize[];
}

interface RowProps {
  index: number;
  style: React.CSSProperties;
}

const NobelsList: React.FC<NobelsListProps> = ({ prizes }) => {
  const data = useMemo(() => prizes, [prizes]);

  const Row = ({ index, style }: RowProps) => {
    const prize = data[index];
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
      itemCount={data.length}
      itemSize={50}
      width="100%"
      className="rounded-lg"
    >
      {Row}
    </List>
  );
};

export default NobelsList;
