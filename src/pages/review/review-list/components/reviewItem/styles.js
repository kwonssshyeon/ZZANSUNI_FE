import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const ProfileImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Name = styled.div`
    font-size: var(--font-size-md);
    font-weight: 700;
`;

export const Tier = styled.div`
    font-size: var(--font-size-sm);
    color: var(--color-grey-01);
`;

export const Text = styled.div`
    font-size: var(--font-size-sm);
    margin-left: 35px;
`

export const SmallText = styled.div`
    font-size: 0.8rem;
    margin-left: 35px;
    margin-bottom: 5px;
    color: var(--color-grey-01);
    border-radius: 20px;
    width: 90px;
    border: var(--color-grey-02) 0.5px solid;
    text-align: center;
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
`

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: start;
    justify-content: space-between;
`

export const StarWrapper = styled.div`
    position: absolute
    display: flex;
    flex-direction: row;
    top: 0px;
    right: 0px;
    margin: 5px;
`

export const ImageBox = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 70%;
  overflow: hidden;
  z-index: 10;
`