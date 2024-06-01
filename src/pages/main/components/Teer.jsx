import { useCallback, useEffect, useState } from 'react';

import { TierInfo } from '../../../components/userInfo/TierInfo';
import * as Styles from './styles';
import { getUserInfo } from '@/apis/user/user.api';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import { getTierDetails } from '@/constants/TierSchema';
import { useUserInfoStore } from '@/store/useUserInfoStore';

const Teer = () => {
  const [userInfo, setUserInfo] = useState([]);
  const {
    setUserId,
    setUserNickname,
    setUserProfileImageUrl,
    setUserEmail,
    setUserTier,
    setUserTotalExp,
    setUserCurrentExp,
    userNickname,
    userTier,
    userCurrentExp,
  } = useUserInfoStore();

  const fetchUserInfo = useCallback(async () => {
    try {
      const response = await getUserInfo();
      const data = response.data;
      setUserInfo(data);
      // Assuming setting store state is necessary here
      setUserId(data.id);
      setUserNickname(data.nickname);
      setUserProfileImageUrl(data.profileImageUrl);
      setUserEmail(data.email);
      setUserTier(data.tierInfo.tier);
      setUserTotalExp(data.tierInfo.totalExp);
      setUserCurrentExp(data.tierInfo.currentExp);
    } catch (error) {
      console.error('fetchUserInfo error: ', error);
    }
  }, [
    setUserId,
    setUserNickname,
    setUserProfileImageUrl,
    setUserEmail,
    setUserTier,
    setUserTotalExp,
    setUserCurrentExp,
  ]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const tierDetails = userTier
    ? getTierDetails(userTier)
    : { color: 'var(--color-class-02)' };

  console.log(userTier);
  return (
    <>
      <Styles.TitleText mgLF='1rem' mgBT='0.5rem'>
        내 티어
      </Styles.TitleText>
      <Styles.TeerLayout height='9.3125rem' width='21rem'>
        <Styles.InfoContainer>
          <Styles.ImgContainer>
            <Styles.ProfileImg src={ProfileImg} />
          </Styles.ImgContainer>
          <Styles.NameContainer>
            <Styles.TitleText>{userNickname}</Styles.TitleText>
            <Styles.TextContainer>
              <Styles.TextItem color={tierDetails.color} fw='700'>
                {userTier}
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
