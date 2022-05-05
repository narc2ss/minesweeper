import { FC } from "react";

interface Props {
  time: number;
}

const Time: FC<Props> = ({ time }) => {
  return <span>TIME: {time}s</span>;
};

export default Time;
