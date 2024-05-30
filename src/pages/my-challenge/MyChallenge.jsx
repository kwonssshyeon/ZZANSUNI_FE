import { TitleText } from '../main/components/styles';
import ChallengeList from './components/ChallengeList';
import * as Styles from './styles';
import Header from '@/components/header/Header';

const MyChallenge = () => {
  return (
    <>
      <Header title='내 챌린지' BackgroundColor='#fff' />
      <TitleText mgLF='1rem' mgBT='1rem' mgTP='1rem'>
        참여중인 챌린지
      </TitleText>
      <Styles.MyChallengeLayout>
        <ChallengeList color='#fff' BorderColor='#c0c0c0' />
        <ChallengeList
          BackgroundColor='#fff'
          color='#c0c0c0'
          BorderColor='#c0c0c0'
        />
      </Styles.MyChallengeLayout>
    </>
  );
};

export default MyChallenge;
