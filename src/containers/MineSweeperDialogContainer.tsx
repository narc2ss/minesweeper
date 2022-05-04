import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import MineSweeperDialog from "../components/MineSweeperDialog";
import { RootState } from "../reducers";
import { gameStart } from "../reducers/mineSweeper";

const MineSweeperDialogContainer: FC = () => {
  const { status } = useSelector((state: RootState) => state.mineSweeper);
  const dispatch = useDispatch();
  const gameStartHandler = () => {
    dispatch(gameStart());
  };
  return (
    <>
      {status === "DONE" && (
        <MineSweeperDialog gameStartHandler={gameStartHandler} />
      )}
    </>
  );
};

export default MineSweeperDialogContainer;
