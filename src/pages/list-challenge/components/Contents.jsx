import React from 'react';

import { Text } from '../../rank/styles';
import * as Styles from '../styles';

const Contents = ({ challenge }) => {
  const { title, content, participantCount, startDate, endDate } = challenge;

  return (
    <Styles.ChallengeListContainer>
      <Styles.ChallengeListContents>
        <Text fw='700' fs='1.3rem'>
          {title}
        </Text>
        <Text color='#000'>{content}</Text>
        <Text color='#103955'>누적 참여자수 {participantCount}명</Text>
        <Text color='#103955'>
          {startDate} ~ {endDate}
        </Text>
      </Styles.ChallengeListContents>
    </Styles.ChallengeListContainer>
  );
};

export default Contents;
