import * as Styles from './Styles';
import ProfileImg from '@/assets/challenge/ZZAN-Green.png';

const ListItem = () => {
  return (
    <>
      <Styles.listItemLayout>
        <Styles.ProfileContainer>
          <Styles.ProfileImage src={ProfileImg} />
        </Styles.ProfileContainer>
        <Styles.Text max='150px' fw='700' fs='1.125rem'>
          쓰레기 줍기 챌린지
        </Styles.Text>
        <Styles.Text max='70px' fs='0.8rem'>
          2024.06.02
        </Styles.Text>
      </Styles.listItemLayout>
    </>
  );
};

export default ListItem;
