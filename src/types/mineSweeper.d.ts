type CountOfNearByMine = number;
export type Cell = {
  status: CountOfNearByMine | "M" | "F";
  isActive: boolean;
};
