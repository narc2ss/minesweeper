import styled from "@emotion/styled";
import { FC } from "react";

const arr = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const MineSweeper: FC = () => {
  return (
    <div>
      <h1>MineSweeper</h1>
      <section>
        <div>
          <span>남은지뢰: 10</span>
        </div>
        <div>
          <button>게임중</button>
        </div>
        <div>
          <span>시간</span>
        </div>
      </section>
      <section>
        {arr.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <CellBlock key={cellIndex}>{cell}</CellBlock>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

const CellBlock = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
`;

export default MineSweeper;
