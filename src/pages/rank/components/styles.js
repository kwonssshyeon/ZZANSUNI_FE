import styled from '@emotion/styled';

export const MyRankLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-green-06);
  border-bottom: 1px solid #bdc5cd;
`;

export const RankInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  padding: 1rem 0;
`;

export const RankProfile = styled.div`
  display: flex;
`;

export const RankProfileImg = styled.img`
  width: ${(props) => props.width || '3rem'};
  height: ${(props) => props.height || '3rem'};
`;
export const TextContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 1rem;
  /* margin-right: 0.5rem; */
  margin-right: ${(props) => props.marginRight || '0.5rem'};
`;

export const AllRankLayout = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  background-color: var(--color-green-06);
  border-bottom: 1px solid #bdc5cd;
`;

export const HighRankContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1rem;
`;

export const HighRankLayout = styled.div`
  display: flex;
  padding: 1.1875rem 1.25rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TrophyContainer = styled.div`
  width: 2.25356rem;
  height: 2.48563rem;
`;

export const Trophy = styled.img`
  width: 100%;
  height: 100%;
`;

export const TeerText = styled.div`
  display: flex;
  width: 4.375rem;
  align-items: center;
  gap: 0.625rem;
`;

export const TeerGraph = styled.div`
  text-align: center;
  width: 100%;
  margin: 1rem 0;
  display: flex;
  height: 0.3125rem;
  /* padding-right: 1.625rem; */
  align-items: center;
  border-radius: 0.125rem;
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CurrentTeerGrpah = styled.div`
  /* width: 1rem; */
  padding: 0 1rem;
  height: 0.3125rem;
  border-radius: 0.125rem;
  background: linear-gradient(90deg, #81633e 0%, #b28854 50%);
`;

export const AllRankContainer = styled.div`
  display: flex;
  height: 20.875rem;
  padding: 0.625rem;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const UserRankContainer = styled.div`
  display: flex;
  width: 20rem;
  margin: 0 2.5rem 0 2rem;
  padding: 0.46875rem 0rem 0.46875rem 0.625rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  background: #fff;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  flex-direction: row;
  gap: 1rem;
`;
