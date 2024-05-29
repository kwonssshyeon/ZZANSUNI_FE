import React, { useRef, useState } from "react";
import * as Styles from './styles';

const Verification = () => {
    const fileInput = React.useRef(null);
    const [previewImg, setPreviewImg] = useState();



    const handleButtonClick = (e) => {
        fileInput.current.click();
    };

    const imageHandler = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) =>{
            reader.onload = () => {
                setPreviewImg(reader.result);
                resolve();
            };
        });
    };


    return (
        <Styles.Wrapper>
            <Styles.Title>길에 떨어진 쓰레기 줍기 챌린지</Styles.Title>
            <Styles.InputArea placeholder="어떻게 챌린지를 수행했는지 글로 남겨보세요"></Styles.InputArea>
            {!previewImg && <Styles.AddImageBtn onClick={handleButtonClick}>
                <input
                    type="file"
                    ref={fileInput}
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e)=>{imageHandler(e.target.files[0])}}
                />
                사진추가
            </Styles.AddImageBtn>}
            {previewImg &&<Styles.Image src={previewImg} />}
            <Styles.Btn>참여하기</Styles.Btn>
        </Styles.Wrapper>
    );
}


export default Verification;