import { Container } from '../rank/components/styles';
import { Text } from '../rank/styles';
import CategoryButton from './components/CategoryButton';
import Contents from './components/Contents';
import * as Styles from './styles';
import Header from '@/components/header/Header';

const ChallengeList = () => {
  return (
    <>
      <Header title='챌린지 목록' BackgroundColor='#fff' />
      <Styles.ChallengeListLayout>
        <CategoryButton />
        <Contents />
        <Contents />
        <Contents />
      </Styles.ChallengeListLayout>
    </>
  );
};

export default ChallengeList;
