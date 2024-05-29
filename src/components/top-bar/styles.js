import styled from '@emotion/styled';

export const TopBarLayout = styled.div`
  display: flex;
  z-index: 2;

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  background: var(--color-white);
  font-size: var(--font-size-lg);
  font-weight: bold;
`;
