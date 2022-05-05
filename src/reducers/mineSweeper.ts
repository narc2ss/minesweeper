import { IBoardPayload, ICell, Status } from "../types/mineSweeper";
import { getBoardData } from "../utils";

const GAME_INIT = "GAME_INIT" as const;
const GAME_START = "GAME_START" as const;
const GAME_OVER = "GAME_OVER" as const;
const GAME_CLEAR = "GAME_CLEAR" as const;
const ADD_RECORD = "ADD_RECORD" as const;
const UPDATE_BOARD_DATA = "UPDATE_BOARD_DATA" as const;
const UPDATE_SUSPECTED_CELL = "UPDATE_SUSPECTED_CELL" as const;

export const gameInit = (payload: IBoardPayload) => ({
  type: GAME_INIT,
  payload,
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
  | ReturnType<typeof gameOver>
  | ReturnType<typeof addRecord>
  | ReturnType<typeof updateBoardData>
  | ReturnType<typeof updateSuspectedCell>;

type MineSweeperState = {
  boardData: ICell[][];
  status: Status;
  MINES: number;
  ROW: number;
  COLUMN: number;
  startTime: number;
  currentMines: number;
  endTime: number;
  countOfOpendCell: number;
  records: number[];
};

const initialState: MineSweeperState = {
  boardData: [],
  status: "INIT",
  ROW: 0,
  COLUMN: 0,
  MINES: 0,
  currentMines: 0,
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
        currentMines: action.payload.mines,
      };
    }
    case GAME_INIT: {
      const { row, column, mines } = action.payload;
      return {
        ...initialState,
        boardData: getBoardData(action.payload),
        ROW: row,
        COLUMN: column,
        MINES: mines,
        currentMines: mines,
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
    case GAME_OVER: {
      return {
        ...state,
        status: "DONE",
        boardData: state.boardData!.map((rowData) =>
          rowData.map((cell) =>
            cell.isMine ? { ...cell, isOpen: true } : cell
          )
        ),
        startTime: 0,
      };
    }
    case GAME_CLEAR: {
      const newBoardData = state.boardData.map((row) =>
        row.map((cell) => (cell.isMine ? { ...cell, isOpen: true } : cell))
      );
      return {
        ...state,
        status: "CLEAR",
        boardData: newBoardData,
      };
    }
    case ADD_RECORD: {
      const newRecords = [...state.records, action.payload].sort(
        (a, b) => a - b
      );
      return { ...state, records: newRecords };
    }
    default:
      return { ...state };
  }
}

export default mineSweeper;
