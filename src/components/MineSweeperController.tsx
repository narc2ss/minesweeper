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
        <span>남은지뢰: {mines}</span>
      </div>
      <div>
        <span>시간 : {time}</span>
      </div>
      <div>
        <button onClick={resetHandler}>다시 시작</button>
      </div>
    </MineSweeperControllerBlock>
  );
};

const MineSweeperControllerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export default MineSweeperController;
