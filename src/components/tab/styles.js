import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const TabHeaderContainer = styled.div`
  /* position: absolute; */
  position: ${(props) => props.position || 'absolute'};
  width: 100%;
`;

export const StylizedTab = styled.div`
  z-index: 1;
  color: var(--color-grey-02);
  width: 100%;
  font-size: var(--font-size-md);
  background-color: transparent;
  border: none;
  height: 50px;
  margin-top: 3px;
  text-align: center;
  line-height: 50px;

  ${(p) =>
    p.active &&
    css`
      color: var(--color-white);
      font-weight: bold;
      border-radius: 20px;
      animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 0.65,
};

export const TabSlider = styled.div`
  position: absolute;
  top: 3px;
  width: ${(props) => `${props.width}px`};
  height: 50px;
  background-color: var(--color-green-01);
  border-radius: 20px;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(92, 198, 186, 0);
            box-shadow: 0 0 0 0 rgba(92, 198, 186, 0);
  }
  100% {
    -webkit-box-shadow: 3px 3px 3px rgba(92, 198, 186, 0.5);
            box-shadow: 3px 3px 3px rgba(92, 198, 186, 0.5);
  }
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? 'flex' : 'none')};
  font-size: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
