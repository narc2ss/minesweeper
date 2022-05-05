import { MINES } from "../constants";
import { Cell, ICell, Status } from "../types/mineSweeper";

const GAME_INIT = "GAME_INIT" as const;
const GAME_START = "GAME_START" as const;
const GAME_OVER = "GAME_OVER" as const;
const GAME_CLEAR = "GAME_CLEAR" as const;
const ADD_RECORD = "ADD_RECORD" as const;
const OPEN_CELL = "OPEN_CELL" as const;
const SUSPECT_CELL = "SUSPECT_CELL" as const;

const UPDATE_BOARD_DATA = "UPDATE_BOARD_DATA" as const;
const UPDATE_SUSPECTED_CELL = "UPDATE_SUSPECTED_CELL" as const;

export const gameInit = (boardData: ICell[][]) => ({
  type: GAME_INIT,
  payload: boardData,
});

export const gameStart = () => ({
  type: GAME_START,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const gameClear = () => ({
  type: GAME_CLEAR,
});

export const openCell = (cell: Cell) => ({
  type: OPEN_CELL,
  payload: cell,
});

export const suspectCell = (cell: Cell) => ({
  type: SUSPECT_CELL,
  payload: cell,
});

export const addRecord = (time: number) => ({
  type: ADD_RECORD,
  payload: time,
});

export const updateBoardData = (boardData: ICell[][]) => ({
  type: UPDATE_BOARD_DATA,
  payload: boardData,
});

export const updateSuspectedCell = (payload: {
  boardData: ICell[][];
  mines: number;
}) => ({
  type: UPDATE_SUSPECTED_CELL,
  payload,
});

type MineSweeperAction =
  | ReturnType<typeof gameInit>
  | ReturnType<typeof gameStart>
  | ReturnType<typeof gameClear>
  | ReturnType<typeof openCell>
  | ReturnType<typeof suspectCell>
  | ReturnType<typeof gameOver>
  | ReturnType<typeof addRecord>
  | ReturnType<typeof updateBoardData>
  | ReturnType<typeof updateSuspectedCell>;

type MineSweeperState = {
  boardData?: ICell[][];
  status: Status;
  mines: number;
  startTime: number;
  endTime: number;
  countOfOpendCell: number;
  records: number[];
};

const initialState: MineSweeperState = {
  boardData: undefined,
  status: "INIT",
  mines: MINES,
  startTime: 0,
  endTime: 0,
  countOfOpendCell: 0,
  records: [],
};

function mineSweeper(
  state: MineSweeperState = initialState,
  action: MineSweeperAction
): MineSweeperState {
  switch (action.type) {
    case UPDATE_BOARD_DATA: {
      return {
        ...state,
        boardData: action.payload,
      };
    }
    case UPDATE_SUSPECTED_CELL: {
      return {
        ...state,
        boardData: action.payload.boardData,
        mines: action.payload.mines,
      };
    }
    case GAME_INIT: {
      return {
        ...initialState,
        boardData: action.payload,
        records: [...state.records],
      };
    }
    case GAME_START: {
      return {
        ...state,
        startTime: Date.now(),
        status: "START",
      };
    }
    // case GAME_OVER: {
    //   return {
    //     ...state,
    //     status: "DONE",
    //     field: state.field.map((row) =>
    //       row.map((cell) =>
    //         cell.status === "M" ? { ...cell, isActive: true } : cell
    //       )
    //     ),
    //   };
    // }
    // case GAME_CLEAR: {
    //   const newField = state.field.map((row) =>
    //     row.map((cell) =>
    //       cell.status === "M" ? { ...cell, isSuspect: true } : cell
    //     )
    //   );
    //   return {
    //     ...state,
    //     status: "CLEAR",
    //     field: newField,
    //   };
    // }
    // case OPEN_CELL: {
    //   const { id, isActive } = action.payload;

    //   if (isActive) return { ...state };

    //   const newField = state.field.map((row) =>
    //     row.map((cell) => (cell.id === id ? { ...cell, isActive: true } : cell))
    //   );

    //   return {
    //     ...state,
    //     field: newField,
    //     countOfOpendCell: state.countOfOpendCell + 1,
    //   };
    // }
    // case SUSPECT_CELL: {
    //   const { id, isSuspect } = action.payload;

    //   if (state.mines === 0 && !isSuspect) return { ...state };

    //   let newMines = state.mines;

    //   if (!isSuspect) {
    //     newMines = state.mines - 1;
    //   } else {
    //     newMines = state.mines + 1;
    //   }

    //   const newField = state.field.map((row) =>
    //     row.map((cell) =>
    //       cell.id === id ? { ...cell, isSuspect: !cell.isSuspect } : cell
    //     )
    //   );
    //   return {
    //     ...state,
    //     field: newField,
    //     mines: newMines,
    //   };
    // }
    // case ADD_RECORD: {
    //   const newRecords = [...state.records, action.payload].sort(
    //     (a, b) => a - b
    //   );
    //   return { ...state, records: newRecords };
    // }
    default:
      return { ...state };
  }
}

export default mineSweeper;
