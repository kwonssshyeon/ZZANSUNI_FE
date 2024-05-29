import StrickCalendar from './Strick-calendar';
import * as Styles from './styles';
import DownArrow from '@/assets/main/Down-Arrow.svg';

const Strick = () => {
  return (
    <>
      <Styles.TitleText mgLF='1rem' mgBT='0.5rem'>
        스트릭
      </Styles.TitleText>
      <Styles.StrickLayout>
        <Styles.StrickInfo>
          <Styles.StrickText>
            현재
            <Styles.StrickText fs='1.25rem' fw='700'>
              &nbsp;8&nbsp;
            </Styles.StrickText>
            일
          </Styles.StrickText>
          <Styles.StrickMonthContainer>
            <Styles.StrickText fs='1rem'>6월</Styles.StrickText>
            <Styles.StrickMonthImg src={DownArrow} alt='Down Arrow' />
          </Styles.StrickMonthContainer>
        </Styles.StrickInfo>
        <StrickCalendar />
      </Styles.StrickLayout>
    </>
  );
};

export default Strick;
