import { useQuery } from '@tanstack/react-query';

const fetchNobelPrizes = async () => {
  const response = await fetch('https://api.nobelprize.org/v1/prize.json');
  if (!response.ok) {
    throw new Error('Failed to fetch Nobel Prizes');
  }
  const data = response.json();
  return data;
};

export function useNobelPrizes() {
  return useQuery({
    queryKey: ['nobelPrizes'],
    queryFn: fetchNobelPrizes,
  });
}
