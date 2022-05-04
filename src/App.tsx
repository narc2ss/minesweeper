import {
  MineSweeperControllerContainer,
  MineSweeperDialogContainer,
  MineSweeperFieldContainer,
  MineSweeperRecordContainer,
} from "./containers";

function App() {
  return (
    <>
      <h1>MineSweeper</h1>
      <MineSweeperControllerContainer />
      <MineSweeperFieldContainer />
      <MineSweeperDialogContainer />
      <MineSweeperRecordContainer />
    </>
  );
}

export default App;
