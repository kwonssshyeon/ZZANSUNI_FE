import { useEffect } from 'react';

import { TierInfo } from '../../../components/userInfo/TierInfo';
import { getTierDetails } from '../../../constants/TierSchema';
import { useUserInfoStore } from '../../../store/useUserInfoStore';
import * as Styles from './styles';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';

const UserDummy = {
  result: 'SUCCESS',
  data: {
    id: 1,
    nickname: '박짠짠',
    profileImageUrl: 'https://example.com/profile.jpg',
    email: 'john.doe@example.com',
    tierInfo: {
      tier: '성골 I',
      totalExp: 1200,
      currentExp: 200,
    },
  },
  message: 'Operation completed successfully',
  errorCode: '',
};

const Teer = () => {
  const {
    setUserId,
    setUserNickname,
    setUserProfileImageUrl,
    setUserEmail,
    setUserTier,
    setUserTotalExp,
    setUserCurrentExp,
    userNickname,
    userEmail,
    userTier,
    userTotalExp,
    userCurrentExp,
  } = useUserInfoStore();

  useEffect(() => {
    setUserId(UserDummy.data.id);
    setUserNickname(UserDummy.data.nickname);
    setUserProfileImageUrl(UserDummy.data.profileImageUrl);
    setUserEmail(UserDummy.data.email);
    setUserTier(UserDummy.data.tierInfo.tier);
    setUserTotalExp(UserDummy.data.tierInfo.totalExp);
    setUserCurrentExp(UserDummy.data.tierInfo.currentExp);
  }, [
    setUserId,
    setUserNickname,
    setUserProfileImageUrl,
    setUserEmail,
    setUserTier,
    setUserTotalExp,
    setUserCurrentExp,
  ]);
  // const { UserNickname } = useUserInfoStore();
  // const tierDetails = getTierDetails(userTier);
  const tierDetails = userTier
    ? getTierDetails(userTier)
    : { color: 'var(--color-class-02)' };
  console.log(tierDetails.color);
  return (
    <>
      <Styles.TitleText mgLF='1rem' mgBT='0.5rem'>
        내 티어
      </Styles.TitleText>
      <Styles.TeerLayout height='9.3125rem' width='21rem'>
        {/* <TierInfo /> */}
        <Styles.InfoContainer>
          <Styles.ImgContainer>
            <Styles.ProfileImg src={ProfileImg} />
          </Styles.ImgContainer>
          <Styles.NameContainer>
            <Styles.TitleText>{userNickname}</Styles.TitleText>
            <Styles.TextContainer>
              <Styles.TextItem color={tierDetails.color} fw='700'>
                {UserDummy.data.tierInfo.tier}
              </Styles.TextItem>
              <Styles.TextItem color={tierDetails.color}>
                {userCurrentExp}
              </Styles.TextItem>
            </Styles.TextContainer>
          </Styles.NameContainer>
        </Styles.InfoContainer>
        <Styles.TeerTotal>
          <Styles.TeerCurrent background={tierDetails.color} />
        </Styles.TeerTotal>
      </Styles.TeerLayout>
    </>
  );
};

export default Teer;
