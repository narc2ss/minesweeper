import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../../components/Board";
import { RootState } from "../../reducers";
import {
  gameClear,
  gameOver,
  gameStart,
  updateBoardData,
  updateSuspectedCell,
} from "../../reducers/mineSweeper";
import { ICell } from "../../types/mineSweeper";

const BoardContainer: FC = () => {
  const dispatch = useDispatch();
  const { boardData, MINES, ROW, COLUMN, status, currentMines } = useSelector(
    (state: RootState) => state.mineSweeper
  );

  const getNeighbors = (cell: ICell, boardData: ICell[][]): ICell[] => {
    const neighbors = [];

    const { row, column } = cell;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (i < 0 || i >= ROW || j < 0 || j >= COLUMN) continue;
        if (i === row && j === column) {
          continue;
        }
        neighbors.push(boardData[i][j]);
      }
    }
    return neighbors;
  };

  const getOpendCells = (boardData: ICell[][]) => {
    const arr: ICell[] = [];
    boardData.forEach((rowData) =>
      rowData.forEach((cell) => {
        if (cell.isOpen) arr.push(cell);
      })
    );
    return arr;
  };

  const getSuspectedEquelsMineCells = (boardData: ICell[][]) => {
    const arr: ICell[] = [];
    boardData.forEach((rowData) =>
      rowData.forEach((cell) => {
        if (cell.isSuspect && cell.isMine) arr.push(cell);
      })
    );
    return arr;
  };

  const openEmptyCell = (cell: ICell, boardData: ICell[][]) => {
    const neighbors = getNeighbors(cell, boardData);
    neighbors.forEach((c) => {
      if (!c.isSuspect && !c.isOpen && (c.isEmpty || c.neighboringMines)) {
        boardData[c.row][c.column].isOpen = true;
        if (c.isEmpty) openEmptyCell(c, boardData);
      }
    });
    return boardData;
  };

  const onLeftClick = (cell: ICell) => {
    if (status === "INIT") dispatch(gameStart());
    if (status === "DONE" || status === "CLEAR") return;

    if (cell.isOpen || cell.isSuspect) return;

    if (cell.isMine) return dispatch(gameOver());

    let newBoardData = boardData.map((rowData) => rowData.map((cell) => cell));

    const newCell = newBoardData[cell.row][cell.column];
    newCell.isOpen = true;

    if (newCell.isEmpty) {
      newBoardData = openEmptyCell(cell, newBoardData);
    }

    const opendCells = getOpendCells(newBoardData);
    if (opendCells.length === ROW * COLUMN - MINES)
      return dispatch(gameClear());

    dispatch(updateBoardData(newBoardData));
  };

  const onRightClick = (e: MouseEvent<HTMLElement>, cell: ICell) => {
    e.preventDefault();

    if (status === "INIT") dispatch(gameStart());
    if (status === "DONE" || status === "CLEAR") return;

    if (cell.isOpen) return;

    let newMines = currentMines;

    const newCell = { ...cell };
    if (cell.isSuspect) {
      newCell.isSuspect = false;
      newMines++;
    } else {
      newCell.isSuspect = true;
      newMines--;
    }

    const newBoardData = boardData?.map((rowData) =>
      rowData.map((c) => (c.id === cell.id ? newCell : c))
    );

    const suspectedCells = getSuspectedEquelsMineCells(newBoardData);
    if (MINES === suspectedCells.length) return dispatch(gameClear());

    dispatch(
      updateSuspectedCell({
        boardData: newBoardData,
        mines: newMines,
      })
    );
  };

  if (!boardData) return <div></div>;
  return (
    <Board
      boardData={boardData}
      onLeftClick={onLeftClick}
      onRightClick={onRightClick}
    />
  );
};

export default BoardContainer;
