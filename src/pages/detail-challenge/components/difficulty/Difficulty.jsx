import * as Styles from './styles';
import { joinChallenge } from '../../../../apis/detail-challenge/detail.challenge.api';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Difficulty = ({props, max}) => {
    const [data, setData] = useState(0);
    const navigate = useNavigate();

    const saveHandler = () =>{
        joinChallenge(4).then((res) => {
          setData(res);
          alert("성공적으로 참여했습니다.");
          navigate("/"); 
      }).catch(()=>{
          alert("이미 참여한 챌린지입니다.");
          navigate("/"); 
      });
    };


    return (
    <Styles.Outer>
        <Styles.RowWrapper>
            <Styles.Wrapper>
                <Styles.BoldText>난이도</Styles.BoldText>
                <Styles.SubText>최대 난이도</Styles.SubText>
            </Styles.Wrapper>
            <Styles.Wrapper>
                <Styles.RowWrapper>
                    <Styles.Bar></Styles.Bar>
                    <Styles.Text>{props.difficulty}</Styles.Text>
                </Styles.RowWrapper>
                <Styles.RowWrapper>
                    <Styles.MaxBar></Styles.MaxBar>
                    <Styles.SubText>{max}</Styles.SubText>
                </Styles.RowWrapper>
            </Styles.Wrapper>
        </Styles.RowWrapper>
        <Styles.BigMargin />
        <Styles.Text>1{props.dayType} / {props.participantCount}번 참여하기</Styles.Text>
        <Styles.BigMargin />
        <Styles.Wrapper>
            <Styles.RowWrapper>
                <Styles.BoldText>참여 경험치</Styles.BoldText>
                <Styles.ExpContent>{props.onceExp} 포인트</Styles.ExpContent>
            </Styles.RowWrapper>
            <Styles.Margin />
            <Styles.RowWrapper>
                <Styles.BoldText>완료 경험치</Styles.BoldText>
                <Styles.ExpContent>{props.successExp} 포인트</Styles.ExpContent>
            </Styles.RowWrapper>
        </Styles.Wrapper>
        <Styles.BigMargin />
        <Styles.Btn onClick={saveHandler}>참여하기</Styles.Btn>
    </Styles.Outer>
    );
  }
  
  
export default Difficulty;