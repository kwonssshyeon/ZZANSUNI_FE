import * as Styles from './styles';

const ChallengeContents = () => {
  return (
    <>
      <Styles.ShortChallengeLayout>
        <Styles.ChallengeText
          fontSize='1.5rem'
          fontWeight='700'
          color='#457A82'
        >
          길에 떨어진 쓰레기 줍기 챌린지
        </Styles.ChallengeText>
        <Styles.ChallengeText>
          길에 떨어진 쓰레기를 주워 우리 동네를 깨끗하게 만드는 챌린지입니다.
        </Styles.ChallengeText>
        <Styles.ChallengeText
          fontSize='0.875rem'
          color='#797979'
          fontWeight='400'
        >
          사회적 책임감을 높이고 환경 보호 의식을 증진하기 위한 운동 중
          하나입니다. 이 챌린지는 일상에서 마주하는 길거리나 공원 등 공공장소에
          흩뿌려진 쓰레기를 주변을 깨끗하게 만들기 위해 자발적으로 줍는 것을
          촉구합니다.
        </Styles.ChallengeText>
      </Styles.ShortChallengeLayout>
    </>
  );
};

export default ChallengeContents;
