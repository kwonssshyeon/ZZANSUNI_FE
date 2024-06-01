import ListItem from './components/ListItem';
import * as Styles from './styles';
import Header from '@/components/header/Header';

function ListRecordChallenge() {
  return (
    <>
      <Header title='챌린지 기록' />
      <Styles.ChallengeListLayout>
        <Styles.ChallengeListContainer>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </Styles.ChallengeListContainer>
      </Styles.ChallengeListLayout>
    </>
  );
}

export default ListRecordChallenge;
