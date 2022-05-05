import styled from "@emotion/styled";
import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { updateBoardData, updateSuspectedCell } from "../reducers/mineSweeper";
import { ICell } from "../types/mineSweeper";
import Cell from "./Cell";

const Board: FC = () => {
  const dispatch = useDispatch();
  const { boardData, MINES, ROW, COLUMN } = useSelector(
    (state: RootState) => state.mineSweeper
  );

  const getNeighbors = (cell: ICell, boardData: ICell[][]): ICell[] => {
    if (!ROW || !COLUMN || !MINES) return [] as ICell[];
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
    if (cell.isOpen || cell.isSuspect) return;

    if (cell.isMine) return console.log("game over");

    if (!boardData) return;
    let newBoardData = boardData.map((rowData) => rowData.map((cell) => cell));

    const newCell = newBoardData[cell.row][cell.column];
    newCell.isOpen = true;

    if (newCell.isEmpty) {
      newBoardData = openEmptyCell(cell, newBoardData);
    }

    dispatch(updateBoardData(newBoardData));
  };

  const onRightClick = (e: MouseEvent<HTMLElement>, cell: ICell) => {
    e.preventDefault();

    if (cell.isOpen) return;

    if (!MINES) return;
    let newMines = MINES;

    const newCell = { ...cell };
    if (cell.isSuspect) {
      newCell.isSuspect = false;
      newMines++;
    } else {
      newCell.isSuspect = true;
      newMines--;
    }

    if (newMines === 0) return console.log("clear판별");

    if (!boardData) return;
    const newBoardData = boardData?.map((rowData) =>
      rowData.map((c) => (c.id === cell.id ? newCell : c))
    );

    dispatch(
      updateSuspectedCell({
        boardData: newBoardData,
        mines: newMines,
      })
    );
  };
  if (!boardData) return <div></div>;
  return (
    <BoardBlock row={boardData.length}>
      {boardData.map((rowData) =>
        rowData.map((cell) => (
          <Cell
            key={cell.id}
            cell={cell}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
          />
        ))
      )}
    </BoardBlock>
  );
};

const BoardBlock = styled.section<{ row: number }>`
  width: ${({ row }) => `${row * 62.5}px`};
  display: grid;
  grid-template-columns: ${({ row }) => `repeat(${row}, 1fr)`};
`;

export default Board;
