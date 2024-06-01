import * as Styles from './styles';
import Difficulty from '../components/difficulty/Difficulty';

const Description = ({data}) => {
  const challenges = data.challenges;

  return (
    <Styles.Wrapper>
      <Styles.Category>{data.category}</Styles.Category>
      <Styles.Title>{data.title}</Styles.Title>
      <Styles.Text>{data.content}</Styles.Text>
      <div style={{margin: '5px'}}/>
        <Styles.ContentWrapper>
          <Styles.BoldText>시작일</Styles.BoldText>
          <Styles.Text>{data.startDate}</Styles.Text>
        </Styles.ContentWrapper>
        <Styles.ContentWrapper>
          <Styles.BoldText>종료일</Styles.BoldText>
          <Styles.Text>{data.endDate}</Styles.Text>
        </Styles.ContentWrapper>
      <Styles.Line />
      <Styles.BoldText>참여방법</Styles.BoldText>
      <Styles.Text>{data.guide}</Styles.Text>
      <Styles.RowList>
        <div style={{margin: '5px'}}/>
        {challenges.map((item) =>(
            <Difficulty key={item.id} props={item} max={data.maxDifficulty}/>
        ))}
        <div style={{margin: '5px'}}/>
      </Styles.RowList>
      
      
    </Styles.Wrapper>
  );
}


export default Description;
