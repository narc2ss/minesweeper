import {
  MineSweeperControllerContainer,
  MineSweeperDialogContainer,
  MineSweeperFieldContainer,
} from "./containers";

function App() {
  return (
    <>
      <h1>MineSweeper</h1>
      <MineSweeperControllerContainer />
      <MineSweeperFieldContainer />
      <MineSweeperDialogContainer />
    </>
  );
}

export default App;
