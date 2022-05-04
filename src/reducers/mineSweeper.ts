import { MINES } from "../constants";
import { Cell, Status } from "../types/mineSweeper";
import { initField } from "../utils";

const GAME_INIT = "GAME_INIT" as const;
const GAME_START = "GAME_START" as const;
const GAME_OVER = "GAME_OVER" as const;
const OPEN_CELL = "OPEN_CELL" as const;
const SUSPECT_CELL = "SUSPECT_CELL" as const;

export const gameInit = () => ({
  type: GAME_INIT,
});

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
  | ReturnType<typeof gameInit>
  | ReturnType<typeof gameStart>
  | ReturnType<typeof openCell>
  | ReturnType<typeof suspectCell>
  | ReturnType<typeof gameOver>;

type MineSweeperState = {
  field: Cell[][];
  status: Status;
  mines: number;
  startTime: number;
  endTime: number;
};

const initialState: MineSweeperState = {
  field: initField(),
  status: "INIT",
  mines: MINES,
  startTime: 0,
  endTime: 0,
};

function mineSweeper(
  state: MineSweeperState = initialState,
  action: MineSweeperAction
): MineSweeperState {
  switch (action.type) {
    case GAME_INIT: {
      return initialState;
    }
    case GAME_START: {
      return {
        ...state,
        startTime: Date.now(),
        status: "START",
      };
    }
    case GAME_OVER: {
      return {
        ...state,
        status: "DONE",
        field: state.field.map((row) =>
          row.map((cell) =>
            cell.status === "M" ? { ...cell, isActive: true } : cell
          )
        ),
      };
    }
    case OPEN_CELL: {
      const { id } = action.payload;

      const newField = state.field.map((row) =>
        row.map((cell) => (cell.id === id ? { ...cell, isActive: true } : cell))
      );

      return { ...state, field: newField };
    }
    case SUSPECT_CELL: {
      const { id, isSuspect } = action.payload;

      if (state.mines === 0 && !isSuspect) return { ...state };

      let newMines = state.mines;

      if (!isSuspect) {
        newMines = state.mines - 1;
      } else {
        newMines = state.mines + 1;
      }

      const newField = state.field.map((row) =>
        row.map((cell) =>
          cell.id === id ? { ...cell, isSuspect: !cell.isSuspect } : cell
        )
      );
      return {
        ...state,
        field: newField,
        mines: newMines,
      };
    }
    default:
      return { ...state };
  }
}

export default mineSweeper;
