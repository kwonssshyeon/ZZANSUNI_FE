import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: relative;
    margin: 30px;
    margin-bottom: 60px;
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
`

export const SubText = styled.div`
    font-size: var(--font-size-sm);
    color: var(--color-grey-01);
`
export const AddImageBtn = styled.div`
    border-radius: 20px;
    background-color: var(--color-white);
    font-size: var(--font-size-md);
    color: var(--color-green-01);
    width: 99.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    border: var(--color-green-01) 1px solid;
    margin-top: 30px;
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

export const Image = styled.img`
    margin-top: 30px;
    margin-bottom: 60px;
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
    border: none;
`


export const ModalBack = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.8);
` 

export const ModalBackDrop = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 20%;
    background-color: var(--color-white);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`