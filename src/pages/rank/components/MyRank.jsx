import { Text } from '../styles';
import * as Styles from './styles';
import Profile from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/TierSchema';
import { useUserInfoStore } from '@/store/useUserInfoStore';

const MyRank = () => {
  const { userNickname, userTier } = useUserInfoStore();

  const tierDetails = userTier
    ? getTierDetails(userTier)
    : { color: 'var(--color-class-02)' };
  console.log(tierDetails.color);
  return (
    <>
      <Styles.MyRankLayout>
        <Text fs='1.25rem' fw='700' color='#457A82'>
          내 순위
        </Text>
        <Styles.RankInfoContainer>
          <Styles.RankPosition>
            <Text fw='700'>1위</Text>
          </Styles.RankPosition>
          <Styles.RankProfile>
            <Styles.RankProfileImg src={Profile} />
          </Styles.RankProfile>
          <Styles.TextContainer>
            <Text fs='1.25rem' fw='650'>
              {userNickname}
            </Text>
            <Text color={tierDetails.color} fw='700' fs='1.2rem'>
              {userTier}
            </Text>
          </Styles.TextContainer>
        </Styles.RankInfoContainer>
      </Styles.MyRankLayout>
    </>
  );
};

export default MyRank;
