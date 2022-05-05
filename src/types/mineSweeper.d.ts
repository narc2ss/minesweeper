export type Status = "INIT" | "START" | "CLEAR" | "DONE";

export interface ICell {
  id: string;
  row: number;
  column: number;
  isOpen: boolean;
  isSuspect: boolean;
  isMine: boolean;
  isEmpty: boolean;
  neighboringMines: number;
}

export interface IBoardPayload {
  row: number;
  column: number;
  mines: number;
}
