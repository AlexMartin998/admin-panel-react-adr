import { AppRouter } from './routes/AppRouter';
import { DarkModeProvider } from './context/darckModeContext';

export const App = () => {
  return (
    <DarkModeProvider>
      <AppRouter />
    </DarkModeProvider>
  );
};
