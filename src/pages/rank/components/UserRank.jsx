import { Text } from '../styles';
import * as Styles from './styles';
import Profile from '@/assets/main/ZZAN-Profile.png';

const UserRank = () => {
  return (
    <>
      <Styles.UserRankContainer>
        <Styles.Container>
          <Text fw='700'>4위</Text>
          <Styles.RankProfileImg src={Profile} width='1.5rem' height='1.5rem' />
          <Text fw='700'>짠돌이</Text>
        </Styles.Container>
        <Styles.Container>
          <Styles.Container>
            <Text fw='700' fs='0.8rem' color='#C0C0C0'>
              노비 II
            </Text>
            <Text fs='0.8rem' color='#C0C0C0'>
              29
            </Text>
          </Styles.Container>
          <Styles.Container>
            <Styles.TeerGraph>
              <Styles.CurrentTeerGrpah />
            </Styles.TeerGraph>
          </Styles.Container>
        </Styles.Container>
      </Styles.UserRankContainer>
    </>
  );
};

export default UserRank;
