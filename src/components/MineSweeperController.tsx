import styled from "@emotion/styled";
import { FC } from "react";

interface Props {
  mines: number;
}

const MineSweeperController: FC<Props> = ({ mines }) => {
  return (
    <MineSweeperControllerBlock>
      <div>
        <span>남은지뢰: {mines}</span>
      </div>
      <div>
        <button>게임중</button>
      </div>
      <div>
        <span>시간</span>
      </div>
    </MineSweeperControllerBlock>
  );
};

const MineSweeperControllerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

export default MineSweeperController;
