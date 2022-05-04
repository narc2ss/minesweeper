import { Cell, Status } from "../types/mineSweeper";
import { initField } from "../utils";

const GAME_START = "GAME_START" as const;
const GAME_OVER = "GAME_OVER" as const;
const OPEN_CELL = "OPEN_CELL" as const;
const SUSPECT_CELL = "SUSPECT_CELL" as const;

export const gameStart = () => ({
  type: GAME_START,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const openCell = (cell: Cell) => ({
  type: OPEN_CELL,
  payload: cell,
});

export const suspectCell = (cell: Cell) => ({
  type: SUSPECT_CELL,
  payload: cell,
});

type MineSweeperAction =
  | ReturnType<typeof gameStart>
  | ReturnType<typeof openCell>
  | ReturnType<typeof suspectCell>
  | ReturnType<typeof gameOver>;

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
      const { id } = action.payload;

      const newField = state.field.map((row) =>
        row.map((cell) => (cell.id === id ? { ...cell, isActive: true } : cell))
      );

      return { ...state, field: newField, status: "START" };
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
