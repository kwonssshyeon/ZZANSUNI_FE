import styled from '@emotion/styled';

export const ShortChallengeLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const ChallengeText = styled.div`
  font-family: 'Noto Sans';
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  color: ${(props) => props.color || 'var(--color-black-01)'};
  margin-top: ${(props) => props.mgTP || '1rem'};
  line-height: 1.5;
`;

export const ChallengeImgContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const ChallengeImg = styled.img`
  width: 100%;
`;

export const ChallengeInfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  align-items: center;
`;

export const ChallengeInfoIconContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid var(--color-green-01);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ChallengeInfoIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ChallengeInfoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
`;

export const ChallengeInfoText = styled.div`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ChallengeStartBtn = styled.div`
  display: flex;
  width: 0.5rem;
  height: 0.5rem;

  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5rem;

  margin: 1rem 19rem 2rem;
  background: #5cc6ba;
  padding: 1.5rem;
`;

export const ChallengeStartIcon = styled.img`
  width: 1rem;
  height: 1.25rem;
  flex-shrink: 0;
`;
