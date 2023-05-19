const PROGRAMS = {
  Read: "read",
  Write: "write",
  Watch: "watch",
  Listen: "listen",
  Game: "game",
  Manage: "manage",
  Options: "options",
  TaskManager: "taskManager",
  Calculator: "calculator",
  Draw: "draw",
  Notes: "notes",
  Terminal: "terminal",
  Snake: "snake",
  Tetris: "tetris",
  AddStudent: "addStudent",
  AddTeacher: "addTeacher",
  ListStudent: "listStudent",
  ListTeacher: "listTeacher"
};

const INITIAL_STATE = {
  ...Object.fromEntries(
    Object.entries(PROGRAMS).map(([key, value]) => [value, 0])
  ),
  ...Object.fromEntries(
    Object.entries(PROGRAMS).map(([key, value]) => ["last" + key, 0])
  ),
  animatedIcons: window.electron.store.get("animated-icons"),
  mousePointer: 0,
  fullscreen: 1,
  theme: 0
};

const updateProgramState = (state, payload, value) => ({
  ...state,
  [payload]: value
});

const startProgram = (state, payload) =>
  updateProgramState(state, PROGRAMS[payload], 1);

const stopProgram = (state, payload) =>
  updateProgramState(state, PROGRAMS[payload], 0);

const minimizeProgram = (state, payload) => ({
  ...state,
  [PROGRAMS[payload]]: 2,
  ["last" + payload]: state[PROGRAMS[payload]]
});

const resizeProgram = (state, payload) =>
  updateProgramState(state, PROGRAMS[payload], 3);

const setAnimatedIcons = (state) => {
  const animatedIcons = !state.animatedIcons;
  window.electron.store.set("animated-icons", animatedIcons);
  return { ...state, animatedIcons };
};

const setMousePointer = (state) => ({
  ...state,
  mousePointer: state.mousePointer ? 0 : 1
});

const setTheme = (state) => ({
  ...state,
  theme: state.theme ? 0 : 1
});

const setFullScreen = (state) => {
  const fullScreen = !window.electron.store.get("fullscreen");
  window.electron.ipcRenderer.sendMessage("send-fullScreen", !fullScreen);
  window.electron.store.set("fullscreen", fullScreen);
  return { ...state, fullscreen: fullScreen };
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "START_PROGRAM":
      return startProgram(state, payload);
    case "STOP_PROGRAM":
      return stopProgram(state, payload);
    case "MINIMIZE_PROGRAM":
      return minimizeProgram(state, payload);
    case "RESIZE_PROGRAM":
      return resizeProgram(state, payload);
    case "SET_ANIMATED_ICONS":
      return setAnimatedIcons(state);
    case "SET_MOUSE_POINTER":
      return setMousePointer(state);
    case "SET_FULLSCREEN":
      return setFullScreen(state);
    case "SET_THEME":
      return setTheme(state);
    default:
      return state;
  }
};
