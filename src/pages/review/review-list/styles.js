import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: relative;
    margin: 30px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: var(--font-size-lg);
    font-weight: bold;
    margin-bottom: 15px;
`;

export const List = styled.div`
    position: relative;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const VLine = styled.div`
    position: absolute;
    border: #D7D7D7 solid 0.5px;
    height: calc(100% - 20px);
    width: 0px;
    border-radius: 10px;
    margin: 13px;
    z-index: 0;
`