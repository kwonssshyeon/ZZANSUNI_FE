import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: relative;
    margin: 30px;
    margin-top: 70px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    margin: 10px 0;
`;

export const StarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    align-items: end;
    align-self: center;
`;

export const Title = styled.div`
    font-size: var(--font-size-lg);
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Star = styled.div`
    font-size: var(--font-size-xxl);
    font-weight: bold;
    margin-left: 10px;
`;

export const BoldText = styled.div`
    font-size: var(--font-size-md);
    font-weight: bold;
    margin-left: 5px;
    margin-right: 20px;
    flex-shrink: 0;
`;

export const Text = styled.div`
    font-size: var(--font-size-sm);
    margin: 5px 0;
`
export const InputArea = styled.textarea`
    font-size: var(--font-size-sm);
    border-radius: 20px;
    border: var(--color-green-01) 1px solid;
    padding: 10px;
    height: 30vh;
    resize: none;
    margin-top: 10px;
`

export const SubText = styled.div`
    font-size: var(--font-size-sm);
    color: var(--color-grey-01);
    margin: 3px;
`


export const Btn = styled.button`
    position: fixed;
    display:block;
    bottom: 60px;
    width: calc(100% - 60px);
    height: 50px;
    margin-top: 30px;
    border-radius: 20px;
    background-color: var(--color-green-01);
    color: var(--color-white);
    font-size: var(--font-size-md);
    font-weight: bold;
    border: none;   
`

export const CheckBtn = styled.button`
    height: 25px;
    border-radius: 20px;
    margin-left: 5px;
    border: var(--color-grey-02) 1px solid;
    background-color: var(--color-white);
    color: var(--color-grey-02);
    font-size: var(--font-size-sm);
    text-align: center;
    flex-shrink: 0;
    ${({ isSelected }) => isSelected && `
        border: var(--color-green-01) 1px solid;
        color: var(--color-green-01);
    `}
`

export const Margin = styled.div`
    margin: 10px;
`