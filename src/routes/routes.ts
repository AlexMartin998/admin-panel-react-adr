import { Home } from '../pages/home/Home';

type JSXComponent = () => JSX.Element;

interface Route {
  component: JSXComponent | JSX.Element;
  name: string;
  path: string;
  to: string;
}

export const routes: Route[] = [
  {
    to: '/',              // Link/NavLinx
    path: '/',            // <Route path=''/>
    component: Home,
    name: 'Home',
  },
];
