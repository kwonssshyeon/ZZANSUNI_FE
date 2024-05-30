import { Text } from '../../rank/styles';
import * as Styles from '../styles';

const CategoryButton = () => {
  return (
    <>
      <Styles.ButtonContainer>
        <Styles.ButtonChoose>
          <Text color='#fff'>에코</Text>
        </Styles.ButtonChoose>
        <Text color='#B8B8B8'>나눔</Text>
        <Text color='#B8B8B8'>봉사</Text>
        <Text color='#B8B8B8'>건강</Text>
      </Styles.ButtonContainer>
    </>
  );
};

export default CategoryButton;
