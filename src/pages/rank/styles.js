import styled from '@emotion/styled';

export const RankLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-green-06);
`;

export const PageLayout = styled.div`
  margin: 0 1rem;
`;

export const Text = styled.div`
  font-size: ${(props) => props.fs || '1rem'};
  font-weight: ${(props) => props.fw || 'normal'};
  color: ${(props) => props.color || 'black'};
`;
