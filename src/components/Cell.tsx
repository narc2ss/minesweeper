import styled from "@emotion/styled";
import { FC, MouseEvent, ReactNode } from "react";
import { ICell } from "../types/mineSweeper";
import { GiUnlitBomb } from "react-icons/gi";
import { BsFlag } from "react-icons/bs";

interface Props {
  cell: ICell;
  onLeftClick: (cell: ICell) => void;
  onRightClick: (e: MouseEvent<HTMLElement>, cell: ICell) => void;
}

const Cell: FC<Props> = ({ cell, onLeftClick, onRightClick }) => {
  const getCellStatus = (cell: ICell): ReactNode => {
    // if (cell.isOpen) return " ";
    if (cell.isSuspect) return <BsFlag />;
    if (cell.isMine) return <GiUnlitBomb />;
    if (cell.isEmpty) return " ";
    return cell.neighboringMines;
  };
  return (
    <CellBlock
      key={cell.id}
      isOpen={cell.isOpen}
      onClick={() => onLeftClick(cell)}
      onContextMenu={(e) => onRightClick(e, cell)}
    >
      {getCellStatus(cell)}
    </CellBlock>
  );
};
const CellBlock = styled.div<{ isOpen: boolean }>`
  width: 62.5px;
  height: 62.5px;
  background-color: ${({ isOpen }) => isOpen && "#e9e9e9"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #999999;
`;

export default Cell;
