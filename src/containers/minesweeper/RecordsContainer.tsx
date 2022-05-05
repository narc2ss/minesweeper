import { FC } from "react";
import { useSelector } from "react-redux";
import Records from "../../components/Records";
import { RootState } from "../../reducers";

const RecordsContainer: FC = () => {
  const { records } = useSelector((state: RootState) => state.mineSweeper);
  return <Records records={records} />;
};

export default RecordsContainer;
