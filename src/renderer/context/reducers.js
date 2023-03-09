const INITIAL_STATE = {
  read: 0,
  write: 0,
  watch: 0,
  listen: 0,
  game: 0,
  manage: 0,
  options: 0,
  lastRead: 0,
  lastWrite: 0,
  lastWatch: 0,
  lastListen: 0,
  lastGame: 0,
  lastManage: 0,
  lastOptions: 0
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "START_PROGRAM":
      switch (payload) {
        case "Read":
          return { ...state, read: 1 };
        case "Write":
          return { ...state, write: 1 };
        case "Watch":
          return { ...state, watch: 1 };
        case "Listen":
          return { ...state, listen: 1 };
        case "Game":
          return { ...state, game: 1 };
        case "Manage":
          return { ...state, manage: 1 };
        case "Options":
          return { ...state, options: 1 };
      }
    case "STOP_PROGRAM":
      switch (payload) {
        case "Read":
          return { ...state, read: 0 };
        case "Write":
          return { ...state, write: 0 };
        case "Watch":
          return { ...state, watch: 0 };
        case "Listen":
          return { ...state, listen: 0 };
        case "Game":
          return { ...state, game: 0 };
        case "Manage":
          return { ...state, manage: 0 };
        case "Options":
          return { ...state, options: 0 };
      }
    case "MINIMIZE_PROGRAM":
      switch (payload) {
        case "Read":
          return { ...state, read: 2, lastRead: state.read };
        case "Write":
          return { ...state, write: 2, lastWrite: state.write };
        case "Watch":
          return { ...state, watch: 2, lastWatch: state.watch };
        case "Listen":
          return { ...state, listen: 2, lastListen: state.listen };
        case "Game":
          return { ...state, game: 2, lastGame: state.game };
        case "Manage":
          return { ...state, manage: 2, lastManage: state.manage };
        case "Options":
          return { ...state, options: 2, lastOptions: state.options };
      }
    case "RESIZE_PROGRAM":
      switch (payload) {
        case "Read":
          return { ...state, read: 3 };
        case "Write":
          return { ...state, write: 3 };
        case "Watch":
          return { ...state, watch: 3 };
        case "Listen":
          return { ...state, listen: 3 };
        case "Game":
          return { ...state, game: 3 };
        case "Manage":
          return { ...state, manage: 3 };
        case "Options":
          return { ...state, options: 3 };
      }
    default:
      return state;
  }
};
