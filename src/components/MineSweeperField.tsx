import styled from "@emotion/styled";
import { FC, MouseEvent, ReactNode } from "react";
import { Cell } from "../types/mineSweeper";
import { GiUnlitBomb } from "react-icons/gi";
import { BsFlag } from "react-icons/bs";

interface Props {
  field: Cell[][];
  cellHandler: (e: MouseEvent<HTMLDivElement>, cell: Cell) => void;
  preventAll: (e: MouseEvent<HTMLDivElement>) => void;
}

const displayByCellStatus = (cell: Cell): ReactNode => {
  if (cell.isSuspect) return <BsFlag />;
  else if (!cell.isActive) return " ";
  switch (cell.status) {
    case "M":
      return <GiUnlitBomb />;
    case 0:
      return " ";
    default:
      return cell.status;
  }
};

const MineSweeperField: FC<Props> = ({ field, cellHandler, preventAll }) => {
  return (
    <MineSweeperFieldBlock>
      {field.map((row, rowIndex) => (
        <RowBlock key={rowIndex}>
          {row.map((cell) => (
            <CellBlock
              isActive={cell.isActive}
              key={cell.id}
              onMouseDown={(e) => cellHandler(e, cell)}
              onContextMenu={preventAll}
            >
              {displayByCellStatus(cell)}
            </CellBlock>
          ))}
        </RowBlock>
      ))}
    </MineSweeperFieldBlock>
  );
};

const MineSweeperFieldBlock = styled.section``;

const RowBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const CellBlock = styled.div<{ isActive?: boolean }>`
  height: 62.5px;
  background-color: ${({ isActive }) => isActive && "#e9e9e9"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #999999;
`;

export default MineSweeperField;
