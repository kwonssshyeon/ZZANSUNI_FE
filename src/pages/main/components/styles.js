import styled from '@emotion/styled';

export const TitleLayout = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  margin: 1rem 0.5rem 1rem 0.5rem;

  gap: 1rem;
`;

export const LogoContainer = styled.div`
  border: 1.5px solid var(--color-green-01);
  padding: 0.25rem;
  border-radius: 50%;
`;

export const TitleLogo = styled.img`
  width: 2rem;
  color: var(--color-green-01);
`;

export const TitleText = styled.div`
  font-size: var(--font-size-xxl);
  font-weight: bold;
  margin-top: ${(props) => props.mgTP || '0'};
  margin-left: ${(props) => props.mgLF || '0'};
  margin-bottom: ${(props) => props.mgBT || '0'};
  color: ${(props) => props.color || '#000'};
`;

export const CategoryLayout = styled.div`
  display: flex;
  /* width: 23.8125rem; */
  padding: 0rem 0.625rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CategoryButtonContainer = styled.div`
  display: flex;
  padding: 0.3125rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
`;

export const ButtonText = styled.div`
  font-size: var(--font-size-xl);
  font-weight: bold;
  color: ${(props) => props.color || '#000'};
`;

export const CategoryButton = styled.div`
  display: flex;
  width: 4.375rem;
  height: 4.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid #d4d6dd;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const CategoryButtonImage = styled.img`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
`;

export const TeerLayout = styled.div`
  height: 9.3125rem;
  flex-shrink: 0;
  margin: 1rem;
  border-radius: 1.25rem;
  border: 1px solid #d4d6dd;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const InfoContainer = styled.div`
  display: inline-flex;
  /* padding: 0.625rem; */
  padding: 1rem;
  align-items: center;
  gap: 0.625rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 4.6875rem;
  height: 4.6875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-radius: 6.25rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const ProfileImg = styled.img`
  flex: 1 0 0;
  align-self: stretch;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TextItem = styled.div`
  color: var(--color-class-02);
  font-family: 'Noto Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: ${(props) => props.fw || '400'};
  line-height: normal;
`;

export const TeerTotal = styled.div`
  display: flex;
  /* width: 21.125rem; */
  margin: 0 1rem;
  width: 19rem;
  height: 0.9375rem;
  /* padding-right: 11.8125rem; */
  /* padding: 0 1rem; */
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.3125rem;
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TeerCurrent = styled.div`
  width: 10.3125rem;
  height: 0.9375rem;
  flex-shrink: 0;
  padding-left: 0.3125rem;
  border-radius: 0.3125rem;
  background: linear-gradient(90deg, #81633e 0%, #b28854 50%);
`;
