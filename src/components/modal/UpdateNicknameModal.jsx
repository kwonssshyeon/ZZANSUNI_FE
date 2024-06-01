import { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';

import { Button, Input, Space } from 'antd';

import { fixUserInfo } from '../../apis/user/user.api.js';
import * as Styles from './styles';
import { useUserInfoStore } from '@/store/useUserInfoStore';

Modal.setAppElement('#root');

const UpdateNicknameModal = ({ isOpen, onRequestClose, currentNickname }) => {
  const { setUserNickname, setUpdateNickname } = useUserInfoStore();
  const [nickname, setNickname] = useState(currentNickname);

  const fetchFixNickname = useCallback(async () => {
    try {
      const data = await fixUserInfo(nickname); // No need to access data from response.data
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fixing user info:', error);
      throw error;
    }
  }, [nickname]);

  useEffect(() => {
    setNickname(currentNickname);
  }, [currentNickname]);

  const handleSubmit = async () => {
    try {
      if (nickname.trim() !== '') {
        await fetchFixNickname(); // Call fetchFixNickname
        setUpdateNickname(nickname); // Set the nickname in the store
        setUserNickname(nickname); // Set the nickname in the store
        alert('닉네임이 성공적으로 수정되었습니다.');
        onRequestClose();
      } else {
        alert('유효한 닉네임을 입력해주세요.');
      }
    } catch (error) {
      console.error('Error updating nickname:', error);
      alert('닉네임 수정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Update Nickname Modal'
      style={{
        content: {
          width: '15rem',
          height: '12rem',
          margin: 'auto',
          borderRadius: '1rem',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <Styles.ModalContainer>
        <h2>닉네임 수정</h2>
        <Input
          type='text'
          placeholder='새 닉네임을 입력하세요'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Styles.ButtonContainer>
          <Space direction='horizontal' size='small'>
            <Styles.CustomButton type='primary' onClick={handleSubmit}>
              수정
            </Styles.CustomButton>
            <Styles.CustomButton type='primary' onClick={onRequestClose}>
              취소
            </Styles.CustomButton>
          </Space>
        </Styles.ButtonContainer>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default UpdateNicknameModal;
