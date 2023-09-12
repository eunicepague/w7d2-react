import Home from './Nav/Home';
import About from './Nav/About';
import Contact from './Nav/Contact';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
];

export default routes;
