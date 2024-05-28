import styled, { css, keyframes } from '@emotion/styled';


export const TabHeaderContainer = styled.div`
  position: relative;
  width: 90vw;
`;

export const StylizedTab = styled.div`
  z-index: 100;
  color: var(--color-grey-02);
  width: 100%;
  padding: 20px 0px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  border-bottom-color: #393e46;

  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  
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
  /* can be used to stack them vertically by using column*/
  flex-direction: row;
  
`;

export const inactiveTab = {
  opacity: 0.65
};



export const TabSlider = styled.div`
  position: absolute;
  top: 0;
  width: ${(props) => `${props.width}px`};
  height: 70px;
  background-color: var(--color-green-01);
  border-radius: 20px;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(238, 82, 83, 0);
            box-shadow: 0 0 0 0 rgba(238, 82, 83, 0);
  }
  100% {
    -webkit-box-shadow: 3px 3px 3px rgba(92, 198, 186, 0.5);
            box-shadow: 3px 3px 3px rgba(92, 198, 186, 0.5);
  }
`;



export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
