import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;


export const Rank = styled.div`
    font-size: var(--font-size-md);
    font-weight: bold;
`;

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.div`
    font-size: var(--font-size-md);
    font-weight: bold;
`;

export const BoldText = styled.div`
    font-size: var(--font-size-sm);
    font-weight: bold;
`

export const SubText = styled.div`
    font-size: var(--font-size-sm);
    color: var(--color-grey-01);
`

export const Point = styled.div`
    font-size: var(--font-size-md);
    color: var(--color-green-05);
`

export const Line = styled.div`
    border-top: 1px solid var(--color-green-06);
    margin: 10px 0px;
`

export const ImageBox = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 70%;
  overflow: hidden;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;