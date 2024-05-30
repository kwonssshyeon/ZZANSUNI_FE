import React from 'react';

import { Text } from '../../rank/styles';
import * as Styles from '../styles';

const Contents = () => {
  return (
    <>
      <Styles.ChallengeListContainer>
        <Styles.ChallengeListContents>
          <Text color='#103955' fw='700' fs='1.25rem'>
            쓰레기 줍기 챌린지
          </Text>
          <Text color='#103955'>
            길에 떨어진 쓰레기를 주워 우리동네를 깨끗하게 만드는 챌린지입니다.
          </Text>
          <Text color='#103955'>누적 참여자수 5명</Text>
          <Text color='#103955'>2024.5.30 ~ 06.20</Text>
        </Styles.ChallengeListContents>
      </Styles.ChallengeListContainer>
    </>
  );
};

export default Contents;
