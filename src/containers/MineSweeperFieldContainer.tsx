import { FC } from "react";
import { useSelector } from "react-redux";
import MineSweeperField from "../components/MineSweeperField";
import { RootState } from "../reducers";

const MineSweeperFieldContainer: FC = () => {
  const field = useSelector((state: RootState) => state.mineSweeper.field);
  return <MineSweeperField field={field} />;
};

export default MineSweeperFieldContainer;
