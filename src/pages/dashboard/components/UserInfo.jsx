import { TeerCurrent, TeerTotal } from '../../main/components/styles';
import * as Styles from './Styles';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';

const UserInfo = () => {
  return (
    <>
      <Styles.DashBoardContainer>
        <Styles.LeaveContainer>
          <Styles.LeaveBtn>회원탈퇴</Styles.LeaveBtn>
        </Styles.LeaveContainer>
        <Styles.ProfileContainer>
          <Styles.ProfileImg src={ProfileImg} />
          <Styles.ProfileInfoContainer>
            <Styles.ProfileInfoText>짠돌이</Styles.ProfileInfoText>
            {/* <Styles.Bar /> */}
            <Styles.editBtnContainer>
              <Styles.EditBtn>수정하기</Styles.EditBtn>
            </Styles.editBtnContainer>
          </Styles.ProfileInfoContainer>
        </Styles.ProfileContainer>
        <Styles.TeerText>
          <Styles.TeerTextItem fw='700'>상민 II</Styles.TeerTextItem>
          <Styles.TeerTextItem>591</Styles.TeerTextItem>
        </Styles.TeerText>
        <TeerTotal>
          <TeerCurrent />
        </TeerTotal>
      </Styles.DashBoardContainer>
    </>
  );
};

export default UserInfo;
