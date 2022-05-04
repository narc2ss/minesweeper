import { FC } from "react";
import Dialog from "./common/Dialog";

interface Props {
  gameStartHandler: () => void;
}

const MineSweeperDialog: FC<Props> = ({ gameStartHandler }) => {
  return (
    <Dialog title="게임 종료" pFunc={gameStartHandler} nFunc={() => {}}>
      다시 시작하기
    </Dialog>
  );
};

export default MineSweeperDialog;
