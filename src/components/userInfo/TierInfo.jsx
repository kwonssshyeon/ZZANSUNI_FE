import { useEffect } from 'react';

import { useUserInfoStore } from '../../store/useUserInfoStore';
// import { UserDummy } from '../../constants/Dummy';
import { getTierDetails } from '@/constants/TierSchema';

const UserDummy = {
  result: 'SUCCESS',
  data: {
    id: 1,
    nickname: 'john_doe',
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

export const TierInfo = () => {
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
  const tierDetails = getTierDetails(UserDummy.data.tierInfo.tier);
  console.log(tierDetails);

  return (
    <div>
      <h1>{userNickname}</h1>
      <p>Tier: {userTier}</p>
      <p>Total Experience: {userTotalExp}</p>
      <p>Current Experience: {userCurrentExp}</p>
      <p>Tier Color: {tierDetails ? tierDetails.color : 'Unknown'}</p>
    </div>
  );
};
