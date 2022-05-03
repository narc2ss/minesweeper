import { MINES, MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { CellStatus } from "../types/mineSweeper";

export const initField = (
  row = MINESWEEPER_ROW,
  column = MINESWEEEER_COLUMN,
  mines = MINES
) => {
  const field: CellStatus[][] = [];

  for (let i = 0; i < row; i++) {
    const row: CellStatus[] = [];
    for (let j = 0; j < column; j++) {
      row.push(0);
    }
    field.push(row);
  }

  return field;
};

type MineSweeperAction = any;

type MineSweeperState = {
  field: CellStatus[][];
};

const initialState: MineSweeperState = {
  field: initField(),
};

function mineSweeper(
  state: MineSweeperState = initialState,
  action: MineSweeperAction
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mineSweeper;
