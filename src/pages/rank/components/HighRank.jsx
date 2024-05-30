import { Text } from '../styles';
import * as Styles from './styles';
import First from '@/assets/Rank/1st-Trophy.svg';
import Second from '@/assets/Rank/2nd-Trophy.svg';
import Third from '@/assets/Rank/3rd-Trophy.svg';
import Profile from '@/assets/main/ZZAN-Profile.png';

const gradeToTrophy = {
  1: First,
  2: Second,
  3: Third,
};

const HighRank = ({ grade }) => {
  const trophySrc = gradeToTrophy[grade];

  return (
    <Styles.HighRankLayout>
      <Styles.TrophyContainer>
        <Styles.Trophy src={trophySrc} />
      </Styles.TrophyContainer>
      <Styles.RankProfileImg src={Profile} width='1.5rem' height='1.5rem' />
      <Text fs='1.2rem' fw='700'>
        짠돌이
      </Text>
      <Styles.TextContainer marginRight='1rem' direction='column'>
        <Text color='#B28854' fw='700' fs='0.8rem'>
          상민 II
        </Text>
        <Styles.TeerGraph>
          <Styles.CurrentTeerGrpah />
        </Styles.TeerGraph>
      </Styles.TextContainer>
    </Styles.HighRankLayout>
  );
};

export default HighRank;
