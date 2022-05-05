import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MineSweeperDialog from "../components/MineSweeperDialog";
import { RootState } from "../reducers";
import { gameInit } from "../reducers/mineSweeper";

const MineSweeperDialogContainer: FC = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.mineSweeper);
  const [dialogActive, setDialogActive] = useState(false);

  const gameStartHandler = () => {
    // dispatch(gameInit());
  };

  const nonActiveDialog = () => {
    setDialogActive(false);
  };

  useEffect(() => {
    if (status === "DONE") setDialogActive(true);
    else setDialogActive(false);
  }, [status]);

  return (
    <>
      {dialogActive && (
        <MineSweeperDialog
          gameStartHandler={gameStartHandler}
          nonActiveDialog={nonActiveDialog}
        />
      )}
    </>
  );
};

export default MineSweeperDialogContainer;
