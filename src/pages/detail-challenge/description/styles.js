import styled from '@emotion/styled';

export const Wrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Category = styled.div`
    font-size: var(--font-size-xs);
    color: var(--color-green-01);
`;

export const Title = styled.div`
    font-size: var(--font-size-xl);
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Text = styled.div`
    font-size: var(--font-size-sm);
    margin: 5px 0;
`

export const BoldText = styled.div`
    font-size: var(--font-size-sm);
    font-weight: bold;
    margin: 5px 0;
`

export const SubText = styled.div`
    font-size: var(--font-size-sm);
    color: var(--color-grey-01);
`

export const Line = styled.div`
    border-top: 1px solid var(--color-green-06);
    margin: 30px 0px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Btn = styled.button`
    border-radius: 20px;
    background-color: var(--color-green-01);
    color: var(--color-white);
    font-weight: bold;
    width: 100%;
    height: 50px;
    border: none;
    margin: 30px 0px;
`