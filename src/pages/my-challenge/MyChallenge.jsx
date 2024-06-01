import { useState, useEffect } from 'react';

import { getCurrentChallengeList } from '../../apis/my-challenge/my.challenge.api';
import { TitleText } from '../main/components/styles';
import ChallengeList from './components/ChallengeList';
import * as Styles from './styles';
import Header from '@/components/header/Header';

const MyChallenge = () => {
  const [listChallenges, setListChallenges] = useState([]);

  useEffect(() => {
    const fetchCurrentChallenges = async () => {
      try {
        const challenges = await getCurrentChallengeList(0, 10);
        setListChallenges(challenges.data.data);
        console.log(challenges.data.data);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchCurrentChallenges();
  }, []);

  return (
    <>
      <Header title='내 챌린지' BackgroundColor='#fff' />
      <TitleText mgLF='1rem' mgBT='1rem' mgTP='1rem'>
        참여중인 챌린지
      </TitleText>
      <Styles.MyChallengeLayout>
        <ChallengeList
          BackgroundColor='#fff'
          color='#c0c0c0'
          BorderColor='#c0c0c0'
          challenges={listChallenges} // Pass the listChallenges state as props
        />
      </Styles.MyChallengeLayout>
    </>
  );
};

export default MyChallenge;
