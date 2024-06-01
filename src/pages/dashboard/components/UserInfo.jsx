import { useState } from 'react';

import { TeerCurrent, TeerTotal } from '../../main/components/styles';
import * as Styles from './Styles';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';
import UpdateNicknameModal from '@/components/modal/UpdateNicknameModal';
import { getTierDetails } from '@/constants/TierSchema';
import { useUserInfoStore } from '@/store/useUserInfoStore';

const UserInfo = () => {
  const { userNickname, userTier, userCurrentExp } = useUserInfoStore();
  const tierDetails = userTier
    ? getTierDetails(userTier)
    : { color: 'var(--color-class-02)' };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
            <Styles.editBtnContainer>
              <Styles.EditBtn onClick={handleOpenModal}>
                수정하기
              </Styles.EditBtn>
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
      <UpdateNicknameModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        currentNickname={userNickname}
      />
    </>
  );
};

export default UserInfo;
