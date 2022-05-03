import styled from "@emotion/styled";
import { FC } from "react";
import { CellStatus } from "../types/mineSweeper";

interface Props {
  field: CellStatus[][];
}

const MineSweeperField: FC<Props> = ({ field }) => {
  return (
    <section>
      {field.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <CellBlock key={cellIndex}>{cell}</CellBlock>
          ))}
        </div>
      ))}
    </section>
  );
};

const CellBlock = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
`;

export default MineSweeperField;
