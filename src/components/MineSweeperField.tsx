import styled from "@emotion/styled";
import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { gameOver, openCell, suspectCell } from "../reducers/mineSweeper";
import { Cell } from "../types/mineSweeper";

interface Props {
  field: Cell[][];
}

const MineSweeperField: FC<Props> = ({ field }) => {
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

        if (newCell.status >= 0) {
          dispatch(openCell(newCell));
        } else {
          nonCellHandler(newCell);
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
      if (cell.status === "M") {
        dispatch(gameOver());
      } else if (cell.status === 0) {
        nonCellHandler(cell);
      } else {
        dispatch(openCell(cell));
      }
    }

    if (e.buttons === 2) {
      dispatch(suspectCell());
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
              >
                {/* {cell.status} */}
              </CellBlock>
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
