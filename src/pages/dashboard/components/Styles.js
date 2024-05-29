import styled from '@emotion/styled';

export const DashBoardContainer = styled.div`
  /* width: 24.375rem; */
  height: 14.625rem;
  flex-shrink: 0;

  border-radius: 0rem 0rem 0.625rem 0.625rem;
  background: var(--green--06, #f0f4f3);
`;

export const LeaveContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  align-items: center;

  /* width: 100%; Make container take the full width */
  padding-right: 1rem;
  /* optional: Add padding to right side; */
`;

export const LeaveBtn = styled.div`
  display: inline-flex;
  padding: 0.1875rem 0.5625rem 0.1875rem 0.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  background: var(--green--03, #5498c7);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25);

  color: #fff;
  font-family: 'Noto Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin: 1rem 1rem;
`;

export const ProfileImg = styled.img`
  width: 5.625rem;
  height: 5.625rem;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  /* margin-top: 1rem; */
  height: 3rem;
  width: 100%;
  border-bottom: 1px solid #dadada;
  gap: 1rem;
`;

export const ProfileInfoText = styled.div`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Bar = styled.hr`
  width: 80%;
  margin-top: 4rem;
`;

export const editBtnContainer = styled.div`
  display: flex;
  padding: 0.1875rem 0.5625rem 0.1875rem 0.5rem;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  border-radius: 0.5rem;
  background: var(--green--05, #457a82);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const EditBtn = styled.div`
  color: #fff;
  font-family: 'Noto Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TeerText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;

  margin: 0.5rem 1rem;
`;

export const TeerTextItem = styled.div`
  color: var(--color-class-02);
  font-family: 'Noto Sans';
  font-weight: ${(props) => props.fw || '1rem'};
`;

export const FinishChallengeBtn = styled.div`
  display: flex;
  padding: 0.75rem 5.9375rem 0.5625rem 5.875rem;
  justify-content: center;
  border-radius: 1.25rem;
  margin: 1rem 1rem 2rem 1rem;
  cursor: pointer;
  background: var(--green--01, #5cc6ba);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const FinishChallengeText = styled.div`
  color: #fff;
  font-family: 'Noto Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
