import { Text } from '../styles';
import * as Styles from './styles';
import Profile from '@/assets/main/ZZAN-Profile.png';

const MyRank = () => {
  return (
    <>
      <Styles.MyRankLayout>
        <Text fs='1.25rem' fw='700' color='#457A82'>
          내 순위
        </Text>
        <Styles.RankInfoContainer>
          <Styles.RankProfile>
            <Styles.RankProfileImg src={Profile} />
          </Styles.RankProfile>
          <Styles.TextContainer>
            <Text fw='700'>1위</Text>
            <Text fs='1.2rem'>짠돌이</Text>
            <Text color='#B28854' fw='700' fs='1.2rem'>
              상민 II
            </Text>
          </Styles.TextContainer>
        </Styles.RankInfoContainer>
      </Styles.MyRankLayout>
    </>
  );
};

export default MyRank;
