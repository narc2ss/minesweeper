import { Cell, Status } from "../types/mineSweeper";
import { initField } from "../utils";

const GAME_START = "GAME_START" as const;
const GAME_OVER = "GAME_OVER" as const;
const OPEN_CELL_RECURSIVELY = "OPEN_CELL_RECURSIVELY" as const;
const OPEN_CELL = "OPEN_CELL" as const;
const SUSPECT_CELL = "SUSPECT_CELL" as const;

export const gameStart = () => ({
  type: GAME_START,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const openCellRecursively = () => ({
  type: OPEN_CELL_RECURSIVELY,
});

export const openCell = () => ({
  type: OPEN_CELL,
});

export const suspectCell = () => ({
  type: SUSPECT_CELL,
});

type MineSweeperAction =
  | ReturnType<typeof gameStart>
  | ReturnType<typeof openCell>
  | ReturnType<typeof suspectCell>
  | ReturnType<typeof gameOver>
  | ReturnType<typeof openCellRecursively>;

type MineSweeperState = {
  field: Cell[][];
  status: Status;
};

const initialState: MineSweeperState = {
  field: initField(),
  status: "INIT",
};

function mineSweeper(
  state: MineSweeperState = initialState,
  action: MineSweeperAction
): MineSweeperState {
  switch (action.type) {
    case GAME_START: {
      return {
        ...state,
        field: initField(),
        status: "START",
      };
    }
    case GAME_OVER: {
      return {
        ...state,
        field: state.field.map((row) =>
          row.map((cell) =>
            cell.status === "M" ? { ...cell, isActive: true } : cell
          )
        ),
        status: "DONE",
      };
    }
    case OPEN_CELL: {
      console.log("openCell");
      // const { row: r, column: c } = action.payload;
      // const newField = state.field.map((row, ri) =>
      //   ri === r
      //     ? row.map((cell, ci) =>
      //         ci === c ? { ...cell, isActive: true } : cell
      //       )
      //     : row
      // );
      // return {
      //   field: newField,
      // };
      return { ...state, status: "START" };
    }
    case OPEN_CELL_RECURSIVELY: {
      console.log("open cell recursively");
      return { ...state, status: "START" };
    }
    case SUSPECT_CELL: {
      console.log("suspect cell");
      return { ...state, status: "START" };
    }
    default:
      return { ...state };
  }
}

export default mineSweeper;
