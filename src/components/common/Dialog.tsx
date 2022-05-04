import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  pFunc: Function;
  nFunc: Function;
}

const Dialog: FC<Props> = ({ children, title, pFunc, nFunc }) => {
  return (
    <BlindBlock>
      <DialogBlock>
        <h4>{title}</h4>
        <div>{children}</div>
        <ButtonGroupBlock>
          <button onClick={() => pFunc()}>확인</button>
          <button className="transparent" onClick={() => nFunc()}>
            취소
          </button>
        </ButtonGroupBlock>
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
  min-width: 200px;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.5rem;
`;

const ButtonGroupBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 2rem;
    background-color: #999;
    border: none;
    color: white;
    border-radius: 0.5rem;
  }
  button.transparent {
    background-color: inherit;
    border: 1px solid #999;
    color: #000;
    border-radius: 0.5rem;
  }
`;

export default Dialog;
