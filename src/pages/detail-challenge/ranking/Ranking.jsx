import * as Styles from './styles';
import UserItem from '../components/UserItem';

const Ranking = () => {


    return (
      <>
      <Styles.Wrapper>
        <Styles.Category>에코</Styles.Category>
        <Styles.Title>길에 떨어진 쓰레기 줍기 챌린지</Styles.Title>
      </Styles.Wrapper>
      <Styles.RankingWrapper>
        <UserItem></UserItem>
        <UserItem></UserItem>
        <UserItem></UserItem>
        <UserItem></UserItem>
        <UserItem></UserItem>
      </Styles.RankingWrapper>
      </>
    );
  }
  
  
export default Ranking;