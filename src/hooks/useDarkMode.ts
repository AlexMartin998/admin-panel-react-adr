import { useContext } from 'react';
import { DarkModeContext } from '../context/darckModeContext';

export const useDarkMode = () => useContext(DarkModeContext);
