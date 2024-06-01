import styled from '@emotion/styled';

export const Wrapper = styled.div`
    margin: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    text-align: left;

    overflow-y: auto;
    scrollbar-color: transparent transparent;
    &::-webkit-scrollbar {
        display: none;
    };
`;

export const Title = styled.div`
    font-size: var(--font-size-lg);
    font-weight: bold;
    margin-bottom: 15px;
`;

export const StampWrapper = styled.div`
    border-radius: 20px;
    text-align: center;
    padding: 10px 20px;
    background-color: var(--color-green-06);
    margin-bottom: calc(100% - 250px);
`

export const CautionWrapper = styled.div`
    margin-bottom: 50px;
    padding: 25px;
    background-color: var(--color-grey-01);
    color: var(--color-white);
    text-align: left;
`

export const Text = styled.div`
    font-size: var(--font-size-sm);
    font-weight: bold;
    margin: 5px 0;
`

export const SubText = styled.div`
    font-size: var(--font-size-sm);
    margin-bottom: 15px;
`

export const SmallText = styled.div`
    font-size: var(--font-size-xs);
    margin-bottom: 15px;
`


export const Row = styled.div`
    display: flex;
`

export const Item = styled.div`
    width: 100%;
    flex: 1;
    text-align: center;
    

    ${({ rowLength }) => rowLength === 1 && `
        flex: 1 1 100%;
    `}
    ${({ rowLength }) => rowLength === 2 && `
        flex: 1 1 calc(50% - 10px);
    `}
    ${({ rowLength }) => rowLength === 3 && `
        flex: 1 1 calc(33.33% - 20px);
    `}
`
