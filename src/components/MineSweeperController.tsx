import { FC } from "react";

const MineSweeperController: FC = () => {
  return (
    <>
      <h1>MineSweeper</h1>
      <section>
        <div>
          <span>남은지뢰: 10</span>
        </div>
        <div>
          <button>게임중</button>
        </div>
        <div>
          <span>시간</span>
        </div>
      </section>
    </>
  );
};

export default MineSweeperController;
