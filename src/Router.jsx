import { createBrowserRouter, Outlet } from 'react-router-dom';

import ChallengeList from './pages/list-challenge/list-challenge';
import MyChallenge from './pages/my-challenge/MyChallenge';
import RankPage from './pages/rank/Rank';
import ShortsChallenge from './pages/shorts-challenge/Shorts-challenge';
import NavigateBar from '@/components/nav-bar/navigate-Bar';
import Dashboard from '@/pages/dashboard/Dashboard';
import ChallengeDetailPage from '@/pages/detail-challenge/ChallengeDetailPage';
import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import Rank from '@/pages/rank/Rank';
import ChallengeRecordPage from '@/pages/record-challenge/ChallengeRecordPage';

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
        element: <RankPage />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'challengelist',
        element: <ChallengeList />,
      },
      {
        path: 'challenge-detail',
        element: <ChallengeDetailPage />,
      },
      {
        path: 'challenge-record',
        element: <ChallengeRecordPage />,
      },
    ],
  },
]);
