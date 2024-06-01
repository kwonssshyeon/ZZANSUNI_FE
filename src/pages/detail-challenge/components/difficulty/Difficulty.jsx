import * as Styles from './styles';

const Difficulty = ({props, max}) => {
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
        <Styles.Btn>참여하기</Styles.Btn>
    </Styles.Outer>
    );
  }
  
  
export default Difficulty;