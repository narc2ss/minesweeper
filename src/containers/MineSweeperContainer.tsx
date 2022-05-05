import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/Board";
import { MINES, MINESWEEEER_COLUMN, MINESWEEPER_ROW } from "../constants";
import { RootState } from "../reducers";
import { gameInit } from "../reducers/mineSweeper";
import { getBoardData } from "../utils";

const MineSweeperContainer: FC = () => {
  const dispatch = useDispatch();

  const { status } = useSelector((state: RootState) => state.mineSweeper);

  const [row] = useState<number>(MINESWEEPER_ROW);
  const [column] = useState<number>(MINESWEEEER_COLUMN);
  const [mines] = useState<number>(MINES);

  useEffect(() => {
    dispatch(gameInit({ row, column, mines }));
  }, [row, column, mines, dispatch]);

  useEffect(() => {
    switch (status) {
      case "INIT": {
        // 보드 초기화
        // 시간 초기화
        // 기록 불러오기
        return;
      }
      case "START": {
        // 시작시간 저장
        return;
      }
      case "DONE": {
        // 카운트 멈추기
        // 다이얼로그 보여주기
        return;
      }
      case "CLEAR": {
        // 시간 멈추기
        // 기록추가
        return;
      }
    }
  }, [status]);

  return (
    <div>
      <h1>Mine Sweeper</h1>
      <span>mines: 3</span>
      <span>TIME: 3.252s</span>
      <button>RESRART</button>
      <Board />
      <section>
        <h2>Records</h2>
        <table>
          <thead>
            <tr>
              <th>RANK</th>
              <th>RECOD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2.342s</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MineSweeperContainer;
