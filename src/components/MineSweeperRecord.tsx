import styled from "@emotion/styled";
import { FC } from "react";

interface Props {
  records: number[];
}

const MineSweeperRecord: FC<Props> = ({ records }) => {
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
