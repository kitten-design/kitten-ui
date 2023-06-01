import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import asyncRouter from './components/asyncRouter';
import KittenCore from './routes/KittenCore';
import KittenStyle from './routes/KittenStyle';
import Valtio from './routes/learn/state/valtio';

const DataSet = asyncRouter(() => import('./routes/DataSetPage'), <>加载中</>);

const router = createBrowserRouter([
  { path: '/', element: <KittenCore /> },
  { path: '/1', element: <KittenStyle /> },
  { path: '/2', element: <DataSet /> },
  { path: '/valtio', element: <Valtio /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
