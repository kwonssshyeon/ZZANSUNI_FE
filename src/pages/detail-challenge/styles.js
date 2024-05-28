import styled from '@emotion/styled';

// 챌린지 상세 페이지 css

export const TabsContainer = styled.div`
  display: flex;
  position: relative;
  top: 50px;
  align-self: center;
  width: 90%;
  margin: 0 auto;
  height: 55px;
  border-radius: 20px;
  background-color: var(--color-green-06);
`;

export const TabPanelContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: 50px;
  text-align: center;
`;

export const Image = styled.img`
  position: relative;
  margin: auto;
  display: block;
  height: 40%;
  opacity: 20%;
  object-fit: cover;
  margin-bottom: 28px;
  filter: grayscale(100%);
`;

export const ImageMask = styled.div`
  background-color: var(--color-green-06);
  position: relative;
  top: 50px
`

export const Wrapper = styled.div`
`