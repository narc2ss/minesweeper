import styled from "@emotion/styled";
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
    <MineSweeperRecordBlock>
      <h2>Records</h2>
      <table>
        <thead>
          <tr>
            <th>RANK</th>
            <th>RECOD</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{record}s</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MineSweeperRecordBlock>
  );
};

const MineSweeperRecordBlock = styled.div`
  margin: 1rem 0;
  table {
    margin-top: 1rem;
    width: 100%;
    tbody {
      tr {
        text-align: center;
        height: 2rem;
      }
    }
  }
`;

export default MineSweeperRecord;
