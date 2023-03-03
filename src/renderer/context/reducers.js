const INITIAL_STATE = {
  read: 0,
  write: 0,
  watch: 0,
  listen: 0,
  game: 0,
  manage: 0,
  options: 0
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
          return { ...state, read: 2 };
        case "Yazma":
          return { ...state, write: 2 };
        case "İzleme":
          return { ...state, watch: 2 };
        case "Dinleme":
          return { ...state, listen: 2 };
        case "Oyun":
          return { ...state, game: 2 };
        case "Yönetim":
          return { ...state, manage: 2 };
        case "Ayarlar":
          return { ...state, options: 2 };
      }
    default:
      return state;
  }
};
