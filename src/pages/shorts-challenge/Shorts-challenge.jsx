import ChallengeContents from './components/ChallengeContents';
import ChallengeImage from './components/ChallengeImage';
import ChallengeInfo from './components/ChallengeInfo';
import * as Styles from './styles';
import Header from '@/components/header/Header';

const ShortsChallenge = () => {
  return (
    <>
      <Header />
      <Styles.ShortChallengeLayout>
        <ChallengeContents />
        <ChallengeImage />
        <ChallengeInfo />
      </Styles.ShortChallengeLayout>
    </>
  );
};

export default ShortsChallenge;
