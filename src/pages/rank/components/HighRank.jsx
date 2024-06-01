import { Text } from '../styles';
import * as Styles from './styles';
import First from '@/assets/Rank/1st-Trophy.svg';
import Second from '@/assets/Rank/2nd-Trophy.svg';
import Third from '@/assets/Rank/3rd-Trophy.svg';
import Profile from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/TierSchema';

const gradeToTrophy = {
  1: First,
  2: Second,
  3: Third,
};

const HighRank = ({ grade, user }) => {
  const trophySrc = gradeToTrophy[grade];
  const { nickname, profileImageUrl, tierInfo } = user;

  const tierDetails = tierInfo
    ? getTierDetails(tierInfo.tier)
    : { color: 'var(--color-class-02)' };

  return (
    <Styles.HighRankLayout>
      <Styles.TrophyContainer>
        <Styles.Trophy src={trophySrc} />
      </Styles.TrophyContainer>
      <Styles.RankProfileImg
        src={profileImageUrl ? profileImageUrl : Profile}
        width='1.5rem'
        height='1.5rem'
      />
      <Text fs='1.2rem' fw='700'>
        {nickname}
      </Text>
      <Styles.TextContainer marginRight='1rem' direction='column'>
        <Text color={tierDetails.color} fw='700' fs='0.8rem'>
          {tierInfo.tier}
        </Text>
        <Styles.TeerGraph>
          <Styles.CurrentTeerGrpah background={tierDetails.color} />
        </Styles.TeerGraph>
      </Styles.TextContainer>
    </Styles.HighRankLayout>
  );
};

export default HighRank;
