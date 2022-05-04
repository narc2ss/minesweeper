import {
  MineSweeperControllerContainer,
  MineSweeperDialogContainer,
  MineSweeperFieldContainer,
} from "./containers";

function App() {
  return (
    <>
      <MineSweeperControllerContainer />
      <MineSweeperFieldContainer />
      <MineSweeperDialogContainer />
    </>
  );
}

export default App;
