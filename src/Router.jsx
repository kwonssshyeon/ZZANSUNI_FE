import { createBrowserRouter, Outlet } from 'react-router-dom';

import MyChallenge from './pages/my-challenge/MyChallenge';
import ShortsChallenge from './pages/shorts-challenge/Shorts-challenge';
import NavigateBar from '@/components/nav-bar/navigate-Bar';
import Dashboard from '@/pages/dashboard/Dashboard';
import ChallengeDetailPage from '@/pages/detail-challenge/ChallengeDetailPage';
import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import Rank from '@/pages/rank/Rank';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavigateBar>
          <Outlet />
        </NavigateBar>
      </>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'challenge',
        element: <MyChallenge />,
      },
      {
        path: 'shorts',
        element: <ShortsChallenge />,
      },
      {
        path: 'rank',
        element: <Rank />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'challenge-detail',
        element: <ChallengeDetailPage />,
      },
    ],
  },
]);
