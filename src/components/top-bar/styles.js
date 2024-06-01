import styled from '@emotion/styled';

export const TopBarLayout = styled.div`
  display: flex;
  z-index: 2;

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  background: var(--color-white);
  font-size: var(--font-size-lg);
  font-weight: bold;
`;


export const prevbtnContainer = styled.div`
  position: fixed;
  top: 15px;
  left: 8px;
  display: flex;
  width: 2.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 0.625rem;
  z-index: 10;
`;

export const prevbtn = styled.img`
  width: 0.83744rem;
  height: 1.45488rem;
  flex-shrink: 0;
`;