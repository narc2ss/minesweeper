type CountOfNearByMine = number;

interface CellPosition {
  row: number;
  column: number;
}

export type Status = "INIT" | "START" | "CLEAR" | "DONE";
export interface Cell {
  id: string;
  position: CellPosition;
  status: CountOfNearByMine | "M";
  isActive: boolean;
  isSuspect: boolean;
}
