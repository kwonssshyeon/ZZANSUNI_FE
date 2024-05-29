import * as Styles from './styles';
import ChallengeImg from '@/assets/challenge/Challange-Img.png';

const ChallengeImage = () => {
  return (
    <>
      <Styles.ChallengeImgContainer>
        <Styles.ChallengeImg src={ChallengeImg} />
      </Styles.ChallengeImgContainer>
    </>
  );
};

export default ChallengeImage;
