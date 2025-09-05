
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { routerJSX } from './router.tsx';

createRoot(document.getElementById('root')!).render(<RouterProvider router={routerJSX} />);
