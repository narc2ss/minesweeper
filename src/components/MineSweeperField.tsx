import styled from "@emotion/styled";
import { FC, MouseEvent } from "react";
import { Cell } from "../types/mineSweeper";

interface Props {
  field: Cell[][];
  cellHandler: (e: MouseEvent<HTMLDivElement>, cell: Cell) => void;
  preventAll: (e: MouseEvent<HTMLDivElement>) => void;
}

const MineSweeperField: FC<Props> = ({ field, cellHandler, preventAll }) => {
  return (
    <MineSweeperFieldBlock>
      {field.map((row, rowIndex) => (
        <RowBlock key={rowIndex}>
          {row.map((cell) => {
            if (cell.isActive) {
              return <CellBlock key={cell.id}>{cell.status}</CellBlock>;
            } else if (cell.isSuspect) {
              return (
                <CellBlock
                  key={cell.id}
                  onMouseDown={(e) => cellHandler(e, cell)}
                  onContextMenu={preventAll}
                >
                  F
                </CellBlock>
              );
            } else {
              return (
                <CellBlock
                  key={cell.id}
                  onMouseDown={(e) => cellHandler(e, cell)}
                  onContextMenu={preventAll}
                />
              );
            }
          })}
        </RowBlock>
      ))}
    </MineSweeperFieldBlock>
  );
};

const MineSweeperFieldBlock = styled.section`
  border: 1px solid #000;
`;

const RowBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const CellBlock = styled.div`
  height: 62.5px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MineSweeperField;
