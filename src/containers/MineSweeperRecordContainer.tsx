import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MineSweeperRecord from "../components/MineSweeperRecord";
import { MINES, MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { RootState } from "../reducers";
import { gameClear } from "../reducers/mineSweeper";

const MineSweeperRecordContainer: FC = () => {
  const dispatch = useDispatch();
  const { countOfOpendCell, records } = useSelector(
    (state: RootState) => state.mineSweeper
  );
  useEffect(() => {
    if (countOfOpendCell === MINESWEEPER_ROW * MINESWEEEER_COLUMN - MINES) {
      dispatch(gameClear());
    }
  }, [countOfOpendCell, dispatch]);
  return <MineSweeperRecord records={records} />;
};

export default MineSweeperRecordContainer;
