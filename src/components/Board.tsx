import styled from "@emotion/styled";
import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { updateBoardData, updateSuspectedCell } from "../reducers/mineSweeper";
import { ICell } from "../types/mineSweeper";
import Cell from "./Cell";

const Board: FC = () => {
  const dispatch = useDispatch();
  const { boardData, mines } = useSelector(
    (state: RootState) => state.mineSweeper
  );

  const onLeftClick = (cell: ICell) => {
    if (cell.isOpen || cell.isSuspect) return;

    if (cell.isMine) return console.log("game over");

    if (!boardData) return;
    let newBoardData = boardData.map((rowData) => rowData.map((cell) => cell));

    const newCell = newBoardData[cell.row][cell.column];
    newCell.isOpen = true;

    dispatch(updateBoardData(newBoardData));
  };

  const onRightClick = (e: MouseEvent<HTMLElement>, cell: ICell) => {
    e.preventDefault();

    if (cell.isOpen) return;

    let newMines = mines;

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
