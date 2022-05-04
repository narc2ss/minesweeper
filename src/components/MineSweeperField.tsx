import styled from "@emotion/styled";
import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import {
  gameOver,
  openCell,
  openCellRecursively,
  suspectCell,
} from "../reducers/mineSweeper";
import { Cell } from "../types/mineSweeper";

interface Props {
  field: Cell[][];
}

const MineSweeperField: FC<Props> = ({ field }) => {
  const dispatch = useDispatch();
  const cellHandler = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    cell: Cell
  ) => {
    e.preventDefault();
    if (e.buttons === 1) {
      if (cell.status === "M") {
        dispatch(gameOver());
      } else if (cell.status === 0) {
        dispatch(openCellRecursively());
      } else {
        dispatch(openCell());
      }
    }
    if (e.buttons === 2) {
      dispatch(suspectCell());
      // dispatch(suspectCell(position));
    }
  };

  const preventAll = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <MineSweeperFieldBlock>
      {field.map((row, rowIndex) => (
        <RowBlock key={rowIndex}>
          {row.map((cell) =>
            cell.isActive ? (
              <CellBlock key={cell.id}>{cell.status}</CellBlock>
            ) : (
              <CellBlock
                key={cell.id}
                onMouseDown={(e) => cellHandler(e, cell)}
                onContextMenu={preventAll}
              />
            )
          )}
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
