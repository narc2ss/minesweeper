import { FC } from "react";
import { useSelector } from "react-redux";
import MineSweeperController from "../components/MineSweeperController";
import { RootState } from "../reducers";

const MineSweeperControllerContainer: FC = () => {
  const { mines } = useSelector((state: RootState) => state.mineSweeper);
  return <MineSweeperController mines={mines} />;
};

export default MineSweeperControllerContainer;
