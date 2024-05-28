import styled from '@emotion/styled';

export const NavigateBarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;

  /** 하단 고정 */
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;

  /* width: 24.375rem; */
  height: 3.4375rem;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  border-top: 0.5px solid #bdc5cd;
  background: #fafafa;

  font-size: var(--font-size-lg);
`;

export const IconContainer = styled.div`
  width: 1.9375rem;
  height: 1.9375rem;
  flex-shrink: 0;
`;

export const NavIcon = styled.img``;
