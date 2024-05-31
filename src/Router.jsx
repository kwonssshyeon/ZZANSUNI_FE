import { createBrowserRouter, Outlet } from 'react-router-dom';

import ChallengeList from './pages/list-challenge/list-challenge';
import RedirectPage from './pages/login/RedirectPage';
import MyChallenge from './pages/my-challenge/MyChallenge';
import RankPage from './pages/rank/Rank';
import ShortsChallenge from './pages/shorts-challenge/Shorts-challenge';
import NavigateBar from '@/components/nav-bar/navigate-Bar';
import Dashboard from '@/pages/dashboard/Dashboard';
import ChallengeDetailPage from '@/pages/detail-challenge/ChallengeDetailPage';
import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import ChallengeRecordPage from '@/pages/record-challenge/ChallengeRecordPage';
import WritingReview from '@/pages/review/writingReview/WritingReview';
import ReviewList from '@/pages/review/review-list/ReviewList';

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
        path: 'challenge',
        children: [
          {
            index: true,
            element: <MyChallenge />,
          },
          {
            path: 'list',
            element: <ChallengeList />,
          },
          
        ],
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
        path: 'challenge-detail',
        element: <ChallengeDetailPage />,
      },
      {
        path: 'challenge-record',
        element: <ChallengeRecordPage />,
      },
      {
        path: 'writing-reivew',
        element: <WritingReview />,
      },
      {
        path: 'reivew-list',
        element: <ReviewList />,
      },
    ],
  },
  {
    path: 'login',
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: 'kakao',
        element: <RedirectPage />,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <div>Not Found</div>,
  // },
]);
