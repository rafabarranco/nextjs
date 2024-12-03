import { Laureate } from './Laureate';

export interface Prize {
  year: number;
  category: string;
  laureates?: Laureate[];
}
