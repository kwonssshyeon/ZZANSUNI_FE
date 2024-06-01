import React from 'react';

import * as Styles from './styles';
import FinishStamp from '@/assets/challenge/ZZAN-Black.png';

const ChallengeList = ({ BackgroundColor, color, BorderColor, challenges }) => {
  return (
    <>
      <Styles.ChallengeListLayout>
        {challenges.map((challenge) => (
          <Styles.ChallengeContainer key={challenge.id}>
            <Styles.ChallengeImgContainer>
              <Styles.ChallengeImg src={FinishStamp} />
            </Styles.ChallengeImgContainer>

            <Styles.ChallengeInfoContainer>
              <Styles.ChallengeName>{challenge.title}</Styles.ChallengeName>
            </Styles.ChallengeInfoContainer>

            <Styles.ReviewContainer
              BackgroundColor={BackgroundColor}
              BorderColor={BorderColor}
            >
              <Styles.ReviewText color={color}>리뷰 쓰기</Styles.ReviewText>
            </Styles.ReviewContainer>
          </Styles.ChallengeContainer>
        ))}
        <Styles.ChallengeBarContainer>
          <Styles.ChallengeBar>
            <Styles.ChallengeBarFill />
          </Styles.ChallengeBar>
        </Styles.ChallengeBarContainer>
      </Styles.ChallengeListLayout>
    </>
  );
};

export default ChallengeList;
