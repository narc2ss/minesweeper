import styled from "@emotion/styled";
import { FC } from "react";

interface Props {
  mines: number;
  resetHandler: () => void;
  time: number;
}

const MineSweeperController: FC<Props> = ({ mines, resetHandler, time }) => {
  return (
    <MineSweeperControllerBlock>
      <div>
        <span>MINES: {mines}</span>
      </div>
      <div>
        <span>TIME : {time}</span>
      </div>
      <div>
        <button onClick={resetHandler}>RESTART</button>
      </div>
    </MineSweeperControllerBlock>
  );
};

const MineSweeperControllerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 1rem;
`;

export default MineSweeperController;
