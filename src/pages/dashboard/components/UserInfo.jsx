import { getTierDetails } from '../../../constants/TierSchema';
import { TeerCurrent, TeerTotal } from '../../main/components/styles';
import * as Styles from './Styles';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import { useUserInfoStore } from '@/store/useUserInfoStore';

const UserInfo = () => {
  const { userNickname, userTier, userCurrentExp } = useUserInfoStore();
  const tierDetails = userTier
    ? getTierDetails(userTier)
    : { color: 'var(--color-class-02)' };
  console.log(tierDetails.color);

  return (
    <>
      <Styles.DashBoardContainer>
        <Styles.LeaveContainer>
          <Styles.LeaveBtn>회원탈퇴</Styles.LeaveBtn>
        </Styles.LeaveContainer>
        <Styles.ProfileContainer>
          <Styles.ProfileImg src={ProfileImg} />
          <Styles.ProfileInfoContainer>
            <Styles.ProfileInfoText>{userNickname}</Styles.ProfileInfoText>
            {/* <Styles.Bar /> */}
            <Styles.editBtnContainer>
              <Styles.EditBtn>수정하기</Styles.EditBtn>
            </Styles.editBtnContainer>
          </Styles.ProfileInfoContainer>
        </Styles.ProfileContainer>
        <Styles.TeerText>
          <Styles.TeerTextItem color={tierDetails.color} fw='700'>
            {userTier}
          </Styles.TeerTextItem>
          <Styles.TeerTextItem color={tierDetails.color}>
            {userCurrentExp}
          </Styles.TeerTextItem>
        </Styles.TeerText>
        <TeerTotal>
          <TeerCurrent background={tierDetails.color} />
        </TeerTotal>
      </Styles.DashBoardContainer>
    </>
  );
};

export default UserInfo;
