import * as Styles from './styles';
import StartIcon from '@/assets/challenge/Start-Icon.svg';
import EcoIcon from '@/assets/main/Eco-Logo.svg';

const ChallengeInfo = () => {
  return (
    <>
      <Styles.ChallengeInfoLayout>
        <Styles.ChallengeInfoIconContainer>
          <Styles.ChallengeInfoIcon src={EcoIcon} />
        </Styles.ChallengeInfoIconContainer>
        <Styles.ChallengeInfoTextContainer>
          <Styles.ChallengeInfoText>
            누적 참여자 :&nbsp;
          </Styles.ChallengeInfoText>
          <Styles.ChallengeInfoText>125명</Styles.ChallengeInfoText>
        </Styles.ChallengeInfoTextContainer>
      </Styles.ChallengeInfoLayout>
      <Styles.ChallengeStartBtn>
        <Styles.ChallengeStartIcon src={StartIcon} />
      </Styles.ChallengeStartBtn>
    </>
  );
};

export default ChallengeInfo;
