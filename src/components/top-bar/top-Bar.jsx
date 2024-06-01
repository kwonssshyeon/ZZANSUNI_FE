import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrevIcon from '@/assets/header/Prev-Icon.svg';
import * as Styles from '../top-bar/styles';

const TopBar = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <>
    <Styles.prevbtnContainer onClick={handleBack}>
        <Styles.prevbtn src={PrevIcon} alt='Prev Icon' />
      </Styles.prevbtnContainer>
      <Styles.TopBarLayout>
      
      {title}
      </Styles.TopBarLayout>
    </>
  );
};

export default TopBar;
