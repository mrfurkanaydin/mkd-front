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
        case "Okuma":
          return { ...state, read: 1 };
        case "Yazma":
          return { ...state, write: 1 };
        case "İzleme":
          return { ...state, watch: 1 };
        case "Dinleme":
          return { ...state, listen: 1 };
        case "Oyun":
          return { ...state, game: 1 };
        case "Yönetim":
          return { ...state, manage: 1 };
        case "Ayarlar":
          return { ...state, options: 1 };
      }
    case "STOP_PROGRAM":
      switch (payload) {
        case "Okuma":
          return { ...state, read: 0 };
        case "Yazma":
          return { ...state, write: 0 };
        case "İzleme":
          return { ...state, watch: 0 };
        case "Dinleme":
          return { ...state, listen: 0 };
        case "Oyun":
          return { ...state, game: 0 };
        case "Yönetim":
          return { ...state, manage: 0 };
        case "Ayarlar":
          return { ...state, options: 0 };
      }
    case "MINIMIZE_PROGRAM":
      switch (payload) {
        case "Okuma":
          return { ...state, read: 2, lastRead: state.read };
        case "Yazma":
          return { ...state, write: 2, lastWrite: state.write };
        case "İzleme":
          return { ...state, watch: 2, lastWatch: state.watch };
        case "Dinleme":
          return { ...state, listen: 2, lastListen: state.listen };
        case "Oyun":
          return { ...state, game: 2, lastGame: state.game };
        case "Yönetim":
          return { ...state, manage: 2, lastManage: state.manage };
        case "Ayarlar":
          return { ...state, options: 2, lastOptions: state.options };
      }
    case "RESIZE_PROGRAM":
      switch (payload) {
        case "Okuma":
          return { ...state, read: 3 };
        case "Yazma":
          return { ...state, write: 3 };
        case "İzleme":
          return { ...state, watch: 3 };
        case "Dinleme":
          return { ...state, listen: 3 };
        case "Oyun":
          return { ...state, game: 3 };
        case "Yönetim":
          return { ...state, manage: 3 };
        case "Ayarlar":
          return { ...state, options: 3 };
      }
    default:
      return state;
  }
};
