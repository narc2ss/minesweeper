type CountOfNearByMine = number;

interface CellPosition {
  row: number;
  column: number;
}

export type Status = "INIT" | "START" | "DONE";
export interface Cell {
  id: string;
  position: CellPosition;
  status: CountOfNearByMine | "M" | "E";
  isActive: boolean;
}
