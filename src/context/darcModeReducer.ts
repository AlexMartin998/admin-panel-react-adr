export type DarkModeAction = {
  type: 'LIGHT' | 'DARK' | 'TOGGLE';
};

interface DarkModeState {
  darkMode: boolean;
}

export const DarkModeReducer = (
  state: DarkModeState,
  action: DarkModeAction
) => {
  switch (action.type) {
    case 'LIGHT':
      return {
        ...state,
        darkMode: false,
      };

    case 'DARK':
      return {
        ...state,
        darkMode: true,
      };

    case 'TOGGLE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};
