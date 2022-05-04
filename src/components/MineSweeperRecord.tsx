import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MINES, MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { RootState } from "../reducers";
import { gameClear } from "../reducers/mineSweeper";

const MineSweeperRecord: FC = () => {
  const dispatch = useDispatch();
  const { countOfOpendCell, records } = useSelector(
    (state: RootState) => state.mineSweeper
  );
  useEffect(() => {
    if (countOfOpendCell === MINESWEEPER_ROW * MINESWEEEER_COLUMN - MINES) {
      dispatch(gameClear());
    }
  }, [countOfOpendCell, dispatch]);
  return (
    <div>
      <h2>Records</h2>
      {records.map((record, i) => (
        <div key={i}>{record}</div>
      ))}
    </div>
  );
};

export default MineSweeperRecord;
