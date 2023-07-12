import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage';
import PostPage from '../pages/PostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/post',
        element: <PostPage />
      }
    ]
  },
]);

export default router;
