import styled from '@emotion/styled';

export const HeaderLayout = styled.div`
  /* position: sticky;
  top: 0; */
  display: flex;
  /* width: 100%; */
  height: 3rem;
  padding: 0.46875rem 0.625rem;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || 'var(--color-green-06)'};
`;

export const prevbtnContainer = styled.div`
  display: flex;
  width: 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  align-self: stretch;

  border-radius: 0.625rem;
`;

export const prevbtn = styled.img`
  width: 0.83744rem;
  height: 1.45488rem;
  flex-shrink: 0;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  color: #000;
  font-family: 'Noto Sans';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const EmptyContainer = styled.div`
  display: flex;
  width: 2.8125rem;
  height: 1.6875rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
