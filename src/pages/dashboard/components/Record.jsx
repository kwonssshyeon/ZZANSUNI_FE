import { TitleText } from '../../main/components/styles';
import * as Styles from './Styles';

const Record = () => {
  return (
    <>
      <TitleText mgLF='1rem' mgTP='2rem'>
        내기록
      </TitleText>
      <Styles.FinishChallengeBtn>
        <Styles.FinishChallengeText>
          완료한 챌린지 목록
        </Styles.FinishChallengeText>
      </Styles.FinishChallengeBtn>
    </>
  );
};

export default Record;
