export interface ChartData {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}
