import { ICell } from "../types/mineSweeper";

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getBoardData = (row: number, column: number, mines: number) => {
  const field: ICell[][] = [];

  for (let i = 0; i < row; i++) {
    const row: ICell[] = [];
    for (let j = 0; j < column; j++) {
      const cell = {
        id: `${i}/${j}`,
        row: i,
        column: j,
        isOpen: false,
        isSuspect: false,
        isMine: false,
        isEmpty: true,
        neighboringMines: 0,
      } as ICell;
      row.push(cell);
    }
    field.push(row);
  }

  let mineCont = 0;
  while (mineCont < mines) {
    const randomRow = getRandomInt(0, row);
    const randomColumn = getRandomInt(0, column);
    const randomCell = field[randomRow][randomColumn];

    if (randomCell.isMine) continue;

    randomCell.isMine = true;
    for (let i = randomRow - 1; i <= randomRow + 1; i++) {
      for (let j = randomColumn - 1; j <= randomColumn + 1; j++) {
        if (i < 0 || j < 0) continue;
        const cell = field[i]?.[j];
        if (!cell) continue;
        if (cell.isMine) {
          continue;
        }

        if (cell.isEmpty) cell.isEmpty = false;
        cell.neighboringMines++;
      }
    }

    mineCont++;
  }

  return field;
};
