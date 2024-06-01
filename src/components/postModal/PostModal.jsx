import React from "react";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({result}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <div className={styles.modalContainer}>
            <div>
                {result ? <span className={styles.textInfo}>성공적으로 저장하였습니다.</span>
                :<span className={styles.textInfo}>요청에 실패했어요 ㅠ</span>}
            </div>
            <div className={styles.btnsWrap}>
                <button className={`${styles.btn}`} onClick={() => handleBack()}>확인</button>
            </div>
        </div>
    )
}


export default Modal;