import React from "react";

import MineSweeperControllerContainer from "./containers/MineSweeperControllerContainer";
import MineSweeperFieldContainer from "./containers/MineSweeperFieldContainer";

function App() {
  return (
    <>
      <MineSweeperControllerContainer />
      <MineSweeperFieldContainer />
    </>
  );
}

export default App;
