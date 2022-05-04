import { MINES, MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { Cell } from "../types/mineSweeper";

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const initField = (
  row = MINESWEEPER_ROW,
  column = MINESWEEEER_COLUMN,
  mines = MINES
) => {
  const field: Cell[][] = [];

  for (let i = 0; i < row; i++) {
    const row: Cell[] = [];
    for (let j = 0; j < column; j++) {
      const cell = {
        id: `${i}/${j}`,
        position: {
          row: i,
          column: j,
        },
        status: 0,
        isActive: false,
        isSuspect: false,
      } as Cell;
      row.push(cell);
    }
    field.push(row);
  }

  let mineCont = 0;
  while (mineCont < mines) {
    const randomRow = getRandomInt(0, MINESWEEPER_ROW);
    const randomColumn = getRandomInt(0, MINESWEEEER_COLUMN);
    const randomCell = field[randomRow][randomColumn];

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
