import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Time from "../../components/Time";
import useInterval from "../../hooks/useInterval";
import { RootState } from "../../reducers";
import { addRecord } from "../../reducers/mineSweeper";

const TimeContainer: FC = () => {
  const dispatch = useDispatch();
  const { startTime, status } = useSelector(
    (state: RootState) => state.mineSweeper
  );
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!startTime) return;
    setTime(Date.now() - startTime);
  }, [startTime]);

  useInterval(() => {
    const timeToSecond = (Date.now() - startTime) / 1000;
    if (status !== "START") return;
    setTime(timeToSecond);
  }, 100);

  useEffect(() => {
    if (status === "INIT" || status === "DONE") setTime(0);
  }, [status]);

  useEffect(() => {
    if (status === "CLEAR") dispatch(addRecord(time));
  }, [status, time, dispatch]);

  return <Time time={time} />;
};

export default TimeContainer;
