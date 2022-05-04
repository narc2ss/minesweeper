import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MineSweeperController from "../components/MineSweeperController";
import useInterval from "../hooks/useInterval";
import { RootState } from "../reducers";
import { addRecord, gameInit } from "../reducers/mineSweeper";

const MineSweeperControllerContainer: FC = () => {
  const dispatch = useDispatch();

  const { mines, status, startTime } = useSelector(
    (state: RootState) => state.mineSweeper
  );
  const [time, setTime] = useState(0);

  const resetHandler = () => {
    if (status === "INIT") return;
    dispatch(gameInit());
  };

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
    if (status === "INIT") setTime(0);
  }, [status]);

  useEffect(() => {
    if (status === "CLEAR") dispatch(addRecord(time));
  }, [status, time, dispatch]);
  return (
    <MineSweeperController
      mines={mines}
      resetHandler={resetHandler}
      time={time}
    />
  );
};

export default MineSweeperControllerContainer;
