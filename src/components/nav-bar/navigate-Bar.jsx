import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import * as Styles from '../nav-bar/styles';
import ChallengeShorts from '@/assets/Challenge-Shorts.svg';
import Dashboard from '@/assets/DashBoard.svg';
import Home from '@/assets/Home.svg';
import MyChallenge from '@/assets/My-Challenge.svg';
import Ranking from '@/assets/Ranking.svg';

const NavigateBar = ({ children }) => {
  const navigate = useNavigate();

  const handlerNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      {children}
      <Styles.NavigateBarLayout>
        <Styles.IconContainer>
          <Styles.NavIcon
            onClick={() => handlerNavigate('/challenge')}
            src={MyChallenge}
          />
        </Styles.IconContainer>
        <Styles.IconContainer>
          <Styles.NavIcon
            onClick={() => handlerNavigate('/shorts')}
            src={ChallengeShorts}
          />
        </Styles.IconContainer>
        <Styles.IconContainer>
          <Styles.NavIcon onClick={() => handlerNavigate('/')} src={Home} />
        </Styles.IconContainer>
        <Styles.IconContainer>
          <Styles.NavIcon
            onClick={() => handlerNavigate('/rank')}
            src={Ranking}
          />
        </Styles.IconContainer>
        <Styles.IconContainer>
          <Styles.NavIcon
            onClick={() => handlerNavigate('/dashboard')}
            src={Dashboard}
          />
        </Styles.IconContainer>
      </Styles.NavigateBarLayout>
    </>
  );
};

export default NavigateBar;
