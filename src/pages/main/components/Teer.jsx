import * as Styles from './styles';
import ProfileImg from '@/assets/main/ZZAN-Profile.png';

const Teer = () => {
  return (
    <>
      <Styles.TitleText mgLF='1rem' mgBT='0.5rem'>
        내 티어
      </Styles.TitleText>
      <Styles.TeerLayout height='9.3125rem' width='21rem'>
        <Styles.InfoContainer>
          <Styles.ImgContainer>
            <Styles.ProfileImg src={ProfileImg} />
          </Styles.ImgContainer>
          <Styles.NameContainer>
            <Styles.TitleText>짠돌이</Styles.TitleText>
            <Styles.TextContainer>
              <Styles.TextItem fw='700'>상민 II</Styles.TextItem>
              <Styles.TextItem>591</Styles.TextItem>
            </Styles.TextContainer>
          </Styles.NameContainer>
        </Styles.InfoContainer>
        <Styles.TeerTotal>
          <Styles.TeerCurrent />
        </Styles.TeerTotal>
      </Styles.TeerLayout>
    </>
  );
};

export default Teer;
