import styled from '@emotion/styled';

export const ChallengeListLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  margin: 1rem 0;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--green--06, #f0f4f3);
`;

export const ButtonChoose = styled.div`
  display: flex;
  /* width: 5rem; */
  padding: 0.25rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  background: var(--green--01, #5cc6ba);
`;

export const ChallengeListContainer = styled.div`
  /* width: 21.1875rem; */
  margin: 1rem 0;
  height: 13.6875rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.25rem;
  background: var(--green--06, #f0f4f3);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ChallengeListContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  justify-content: space-between;
`;
