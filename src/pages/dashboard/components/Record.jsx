import { useNavigate } from 'react-router-dom';

import { TitleText } from '../../main/components/styles';
import * as Styles from './Styles';

const Record = () => {
  const navigate = useNavigate();
  const handlerPage = () => {
    navigate('/challenge/record-list');
  };
  return (
    <>
      <TitleText mgLF='1rem' mgTP='2rem'>
        내기록
      </TitleText>
      <Styles.FinishChallengeBtn>
        <Styles.FinishChallengeText onClick={handlerPage}>
          완료한 챌린지 목록
        </Styles.FinishChallengeText>
      </Styles.FinishChallengeBtn>
    </>
  );
};

export default Record;
