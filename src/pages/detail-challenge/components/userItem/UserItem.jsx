import * as Styles from './styles';
import DefaultImage from '../../../../assets/UserImage.svg';

const UserItem = ({data}) => {
    return (
        <>
        <Styles.Wrapper>
            <Styles.Content>
            <Styles.Rank>1위</Styles.Rank>
            <Styles.Image src={DefaultImage} />
            <Styles.UserWrapper>
                <Styles.BoldText>짠돌이</Styles.BoldText>
                <Styles.SubText>노비III</Styles.SubText>
            </Styles.UserWrapper>
            </Styles.Content>
            <Styles.Point>+ 800 포인트</Styles.Point>
        </Styles.Wrapper>
        <Styles.Line />
        </>
    );
  }
  
  
export default UserItem;