import { FC } from "react";
import Dialog from "./common/Dialog";

interface Props {
  gameStartHandler: () => void;
  nonActiveDialog: () => void;
}

const MineSweeperDialog: FC<Props> = ({
  gameStartHandler,
  nonActiveDialog,
}) => {
  return (
    <Dialog title="게임 종료" pFunc={gameStartHandler} nFunc={nonActiveDialog}>
      다시 시작하기
    </Dialog>
  );
};

export default MineSweeperDialog;
