import * as Styles from './styles';
import Difficulty from '../components/difficulty/Difficulty';

const Description = ({data}) => {


  return (
    <Styles.Wrapper>
      <Styles.Category>에코</Styles.Category>
      <Styles.Title>길에 떨어진 쓰레기 줍기 챌린지</Styles.Title>
      <Styles.Text>길에 떨어진 쓰레기를 주워 우리동네를 깨끗하게 만드는 챌린지입니다.</Styles.Text>
      <div style={{margin: '5px'}}/>
        <Styles.ContentWrapper>
          <Styles.BoldText>시작일</Styles.BoldText>
          <Styles.Text>2024.5.25</Styles.Text>
        </Styles.ContentWrapper>
        <Styles.ContentWrapper>
          <Styles.BoldText>종료일</Styles.BoldText>
          <Styles.Text>2024.5.25</Styles.Text>
        </Styles.ContentWrapper>
      <Styles.Line />
      <Styles.BoldText>참여방법</Styles.BoldText>
      <Styles.Text>1. 쓰레기 줍기: 선택한 장소에서 쓰레기를 주웁니다. <br/>
          2. 사진 찍기 및 공유: 쓰레기를 줍는 과정이나 결과물을 사진으로 찍어 인증하기 페이지에 업로드 합니다. <br/>
          3. 다른 사람에게 공유하기: 쓰레기 줍기 챌린지에 참여한 후에는 친구, 가족 또는 동료에게 도전을 넘겨 다음 참여자를 유도합니다. <br/></Styles.Text>
      <Styles.RowList>
        <div style={{margin: '5px'}}/>
        <Difficulty />
        <Difficulty />
        <Difficulty />
        <Difficulty />
        <Difficulty />
        <div style={{margin: '5px'}}/>
      </Styles.RowList>
      
      
    </Styles.Wrapper>
  );
}


export default Description;
