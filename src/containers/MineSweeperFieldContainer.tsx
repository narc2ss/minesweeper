import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import MineSweeperField from "../components/MineSweeperField";
import { MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { RootState } from "../reducers";
import { gameOver, openCell, suspectCell } from "../reducers/mineSweeper";
import { Cell } from "../types/mineSweeper";

const MineSweeperFieldContainer: FC = () => {
  const { field } = useSelector((state: RootState) => state.mineSweeper);
  const dispatch = useDispatch();

  const nonCellHandler = (cell: Cell) => {
    console.log(cell.status);
    if (cell.status !== 0 || cell.isActive) return;

    dispatch(openCell(cell));

    const { row, column } = cell.position;
    let newCell;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (i < 0 || i >= MINESWEEPER_ROW || j < 0 || j >= MINESWEEEER_COLUMN)
          continue;

        if (i === row && j === column) {
          continue;
        }

        newCell = field[i][j];

        if (newCell.status >= 0 && !newCell.isSuspect) {
          dispatch(openCell(newCell));
        }
      }
    }
  };

  const cellHandler = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    cell: Cell
  ) => {
    e.preventDefault();
    if (e.buttons === 1) {
      if (cell.isSuspect) return;
      if (cell.status === "M") {
        dispatch(gameOver());
      } else if (cell.status === 0) {
        nonCellHandler(cell);
      } else {
        dispatch(openCell(cell));
      }
    }

    if (e.buttons === 2) {
      dispatch(suspectCell(cell));
    }
  };

  const preventAll = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <MineSweeperField
      field={field}
      cellHandler={cellHandler}
      preventAll={preventAll}
    />
  );
};

export default MineSweeperFieldContainer;
