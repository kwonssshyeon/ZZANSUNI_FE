import styled from '@emotion/styled';

export const Outer = styled.div`
    border-radius: 20px;
    border: var(--color-grey-02) 1px solid;
    padding: 10px;
    width: 230px;
    flex-shrink: 0;
    margin-bottom: 50px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const SubText = styled.div`
    font-size: var(--font-size-sm);
    color: var(--color-grey-02);
    flex-shrink: 0;
`

export const Text = styled.div`
    font-size: var(--font-size-md);
`

export const Bar = styled.div`
    border-radius: 10px;
    height: 10px;
    background: linear-gradient(90deg, #457A82, #5CC6BA);
    width: 80px;
    flex-shrink: 0;
`

export const MaxBar = styled.div`
    border-radius: 10px;
    height: 10px;
    background: var(--color-grey-02);
    width: 115px;
`

export const BoldText = styled.div`
    font-size: var(--font-size-md);
    font-weight: bold;
    flex-shrink: 0;
`

export const ExpContent = styled.div`
    font-size: var(--font-size-sm);
    background-size: contain;
    text-align: center;
    color: var(--color-green-01);
    padding: 3px;
    border-radius: 20px;
    border: var(--color-green-01) 1px solid;
    flex-shrink: 0;
    min-width: 80px;
    height: 18px;
`

export const Btn = styled.button`
    border-radius: 20px;
    background-color: var(--color-green-01);
    color: var(--color-white);
    font-weight: bold;
    width: 100%;
    height: 45px;
    border: none;
`

export const Margin = styled.div`
    margin: 2px;
`

export const BigMargin = styled.div`
    margin: 20px;
`