import * as Styles from './styles';
import EcoIcon from '@/assets/main/Eco-Logo.svg';
import HealthIcon from '@/assets/main/Heart-Logo.svg';
import ShearIcon from '@/assets/main/Nanum-Logo.svg';
import VolunteerIcon from '@/assets/main/Volunteer-Logo.svg';

const Category = () => {
  return (
    <>
      <Styles.TitleText mgLF='1rem' mgBT='1rem'>
        챌린지 카테고리
      </Styles.TitleText>
      <Styles.CategoryLayout>
        <Styles.CategoryButtonContainer>
          <Styles.CategoryButton>
            <Styles.CategoryButtonImage src={EcoIcon} />
          </Styles.CategoryButton>
          <Styles.ButtonText color='#5DB075'>에코</Styles.ButtonText>
        </Styles.CategoryButtonContainer>
        <Styles.CategoryButtonContainer>
          <Styles.CategoryButton>
            <Styles.CategoryButtonImage src={ShearIcon} />
          </Styles.CategoryButton>
          <Styles.ButtonText color='#FFB636'>나눔</Styles.ButtonText>
        </Styles.CategoryButtonContainer>
        <Styles.CategoryButtonContainer>
          <Styles.CategoryButton>
            <Styles.CategoryButtonImage src={VolunteerIcon} />
          </Styles.CategoryButton>
          <Styles.ButtonText color='#599BE8'>봉사</Styles.ButtonText>
        </Styles.CategoryButtonContainer>
        <Styles.CategoryButtonContainer>
          <Styles.CategoryButton>
            <Styles.CategoryButtonImage src={HealthIcon} />
          </Styles.CategoryButton>
          <Styles.ButtonText color='#FF0000'>건강</Styles.ButtonText>
        </Styles.CategoryButtonContainer>
      </Styles.CategoryLayout>
    </>
  );
};

export default Category;
