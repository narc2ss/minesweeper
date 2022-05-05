import styled from "@emotion/styled";
import { FC, MouseEvent } from "react";
import { ICell } from "../types/mineSweeper";
import Cell from "./Cell";

interface Props {
  boardData: ICell[][];
  onLeftClick: (cell: ICell) => void;
  onRightClick: (e: MouseEvent<HTMLElement>, cell: ICell) => void;
}

const Board: FC<Props> = ({ boardData, onLeftClick, onRightClick }) => {
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
