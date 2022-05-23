import { createContext, useReducer } from 'react';

import { DarkModeReducer } from './darcModeReducer';

interface DarkModeContextProps {
  darkMode: boolean;
  setDarkMode: () => void;
  setLightMode: () => void;
  toggleDarkMode: () => void;
}

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

// TODO: Save & Get from Local Storage
const INIT_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext<DarkModeContextProps>(
  {} as DarkModeContextProps
);

export const DarkModeProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INIT_STATE);

  const setDarkMode = () => dispatch({ type: 'DARK' });
  const setLightMode = () => dispatch({ type: 'LIGHT' });
  const toggleDarkMode = () => dispatch({ type: 'TOGGLE' });

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        setDarkMode,
        setLightMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
