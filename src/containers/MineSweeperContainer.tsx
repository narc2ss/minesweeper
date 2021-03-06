import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MINES, MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { gameInit } from "../reducers/mineSweeper";
import {
  ControllerContainer,
  RecordsContainer,
  BoardContainer,
} from "./minesweeper";

const MineSweeperContainer: FC = () => {
  const dispatch = useDispatch();

  const [row] = useState<number>(MINESWEEPER_ROW);
  const [column] = useState<number>(MINESWEEEER_COLUMN);
  const [mines] = useState<number>(MINES);

  const gameInitHandler = useCallback(() => {
    dispatch(gameInit({ row, column, mines }));
  }, [row, column, mines, dispatch]);

  useEffect(() => {
    gameInitHandler();
  }, [row, column, mines, dispatch, gameInitHandler]);

  return (
    <div>
      <h1>Mine Sweeper</h1>
      <ControllerContainer gameInitHandler={gameInitHandler} />
      <BoardContainer />
      <RecordsContainer />
    </div>
  );
};

export default MineSweeperContainer;
