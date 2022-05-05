import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import TimeContainer from "./TimeContainer";

interface Props {
  gameInitHandler: () => void;
}

const ControllerContainer: FC<Props> = ({ gameInitHandler }) => {
  const { currentMines } = useSelector((state: RootState) => state.mineSweeper);
  return (
    <div>
      <span>mines: {currentMines}</span>
      <TimeContainer />
      <button onClick={gameInitHandler}>RESRART</button>
    </div>
  );
};

export default ControllerContainer;
