import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Category = styled.div`
    margin: 30px;
    margin-bottom: 0px;
    font-size: var(--font-size-xs);
    color: var(--color-green-01);
`;

export const Title = styled.div`
    margin: 0 30px;
    font-size: var(--font-size-xl);
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Text = styled.div`
    font-size: var(--font-size-sm);
    margin: 5px 0;
    margin: 0 30px;
`

export const BoldText = styled.div`
    font-size: var(--font-size-sm);
    font-weight: bold;
    flex-shrink: 0;
    margin: 5px 0;
    margin: 0 30px;
`

export const SubText = styled.div`
    font-size: var(--font-size-sm);
    color: var(--color-grey-01);
    margin: 0 30px;
`

export const Line = styled.div`
    border-top: 1px solid var(--color-green-06);
    margin: 20px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const RowList = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scrollbar-color: transparent transparent;
    &::-webkit-scrollbar {
        background-color: transparent;
        display: none;
    };
    gap: 20px;
    margin: 30px 0;
`