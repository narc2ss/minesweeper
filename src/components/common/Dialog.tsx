import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  text?: string;
  children: ReactNode;
  pFunc: Function;
  nFunc: Function;
}

const Dialog: FC<Props> = ({ children, title, text, pFunc, nFunc }) => {
  return (
    <BlindBlock>
      <DialogBlock>
        <h4>{title}</h4>
        <div>{children}</div>
        <div>
          <button onClick={() => pFunc()}>확인</button>
          <button onClick={() => nFunc()}>취소</button>
        </div>
      </DialogBlock>
    </BlindBlock>
  );
};

const BlindBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogBlock = styled.div`
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Dialog;
