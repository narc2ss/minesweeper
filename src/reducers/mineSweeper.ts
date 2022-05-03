import { MINES, MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { Cell } from "../types/mineSweeper";
import { getRandomInt } from "../utils";

export const initField = (
  row = MINESWEEPER_ROW,
  column = MINESWEEEER_COLUMN,
  mines = MINES
) => {
  const field: Cell[][] = [];

  for (let i = 0; i < row; i++) {
    const row: Cell[] = [];
    for (let j = 0; j < column; j++) {
      row.push({ status: 0, isActive: false });
    }
    field.push(row);
  }

  let mineCont = 0;
  while (mineCont < mines) {
    const randomRow = getRandomInt(0, MINESWEEPER_ROW);
    const randomColumn = getRandomInt(0, MINESWEEEER_COLUMN);
    const randomCell = field[randomRow][randomColumn];
    console.log(mineCont);

    if (randomCell.status === "M") continue;

    randomCell.status = "M";
    for (let i = randomRow - 1; i <= randomRow + 1; i++) {
      if (i < 0) continue;
      for (let j = randomColumn - 1; j <= randomColumn + 1; j++) {
        if (j < 0) continue;
        const cell = field[i]?.[j];
        if (!cell) continue;
        if (cell.status === "M") {
          continue;
        }
        if (typeof cell.status === "number") {
          cell.status += 1;
        }
      }
    }

    mineCont++;
  }

  return field;
};

type MineSweeperAction = any;

type MineSweeperState = {
  field: Cell[][];
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
