import { Text } from '../styles';
import * as Styles from './styles';
import Profile from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/TierSchema';

const UserRank = ({ user, index }) => {
  const { nickname, profileImageUrl, tierInfo, currentExp } = user;

  const tierDetails = tierInfo
    ? getTierDetails(tierInfo.tier)
    : { color: 'var(--color-class-02)' };

  console.log(tierDetails.color);

  return (
    <>
      <Styles.UserRankContainer>
        <Styles.Container>
          <Styles.Text fw='700'>{index + 4}위</Styles.Text>
          <Styles.RankProfileImg src={Profile} width='1.5rem' height='1.5rem' />
          <Text fw='700'>{nickname}</Text>
        </Styles.Container>
        <Styles.Container>
          <Styles.Container>
            <Styles.Text
              max='150px'
              fw='700'
              fs='0.8rem'
              color={tierDetails.color}
            >
              {tierInfo.tier}
            </Styles.Text>
            <Text max='150px' fs='0.8rem' color={tierDetails.color}>
              {tierInfo.currentExp}
            </Text>
          </Styles.Container>
          <Styles.Container>
            <Styles.TeerGraph>
              <Styles.CurrentTeerGrpah background={tierDetails.color} />
            </Styles.TeerGraph>
          </Styles.Container>
        </Styles.Container>
      </Styles.UserRankContainer>
    </>
  );
};

export default UserRank;
