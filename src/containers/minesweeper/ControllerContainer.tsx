import styled from "@emotion/styled";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import TimeContainer from "./TimeContainer";

interface Props {
  gameInitHandler: () => void;
}

const ControllerContainer: FC<Props> = ({ gameInitHandler }) => {
  const { currentMines } = useSelector((state: RootState) => state.mineSweeper);
  return (
    <ControllerContainerBlock>
      <span>mines: {currentMines}</span>
      <TimeContainer />
      <button onClick={gameInitHandler}>RESRART</button>
    </ControllerContainerBlock>
  );
};

const ControllerContainerBlock = styled.div`
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
`;

export default ControllerContainer;
