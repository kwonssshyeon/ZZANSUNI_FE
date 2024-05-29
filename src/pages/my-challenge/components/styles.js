import styled from '@emotion/styled';

export const ChallengeListLayout = styled.div`
  /* height: 8rem; */
  display: flex;
  width: 85vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 1.25rem; */

  border-bottom: 1px solid #d4d6dd;
  background: #fff;
`;
export const ChallengeContainer = styled.div`
  display: flex;
  height: 3rem;
`;
export const ChallengeImgContainer = styled.div`
  border-radius: 100%;
  border: 1px dashed #c0c0c0;
  display: flex;
  margin: 1rem 1rem 1.5rem;
  justify-content: left;
  text-align: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
`;

export const ChallengeImg = styled.img`
  width: 2.5rem;
  filter: opacity(0.5) drop-shadow(0 0 0 #c0c0c0);
`;

export const ChallengeInfoContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  margin: 2rem 0 1rem 0.5rem;
`;

export const ChallengeName = styled.span`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ReviewContainer = styled.div`
  display: flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  height: 1.001rem;
  border-radius: 0.625rem;
  margin: 1rem;
  /* background: var(--green--01, #5cc6ba); */
  background-color: ${(props) => props.BackgroundColor || '#5cc6ba'};
  border: 1px solid;
  border-color: ${(props) => props.BorderColor || '#5cc6ba'};
`;

export const ReviewText = styled.span`
  color: ${(props) => props.color || '#5cc6ba'};
  font-family: 'Noto Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ChallengeBarContainer = styled.div`
  display: flex;
  margin: 1.2rem 1rem 1rem 4rem;
  width: 100%;
`;

export const ChallengeBar = styled.div`
  display: inline-flex;
  height: 0.3125rem;
  width: 60%;
  /* padding: 0 30%; */
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.15625rem;
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ChallengeBarFill = styled.div`
  width: 9.3125rem;
  height: 0.3125rem;
  border-radius: 0.3125rem;
  background: #9e00ff;
`;
