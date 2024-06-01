import * as Styles from './styles';
import DefaultImage from '../../../../assets/UserImage.svg';

const UserItem = ({props}) => {
    return (
        <>
        <Styles.Wrapper>
            <Styles.Content>
            <Styles.Rank>{props.ranking}위</Styles.Rank>
            <Styles.ImageBox><Styles.Image src={props.user.profileImageUrl} /></Styles.ImageBox>
            <Styles.UserWrapper>
                <Styles.BoldText>{props.user.nickname}</Styles.BoldText>
                <Styles.SubText>{props.user.tierInfo.tier}</Styles.SubText>
            </Styles.UserWrapper>
            </Styles.Content>
            <Styles.Point>+ {props.acquiredPoint}포인트</Styles.Point>
        </Styles.Wrapper>
        <Styles.Line />
        </>
    );
  }
  
  
export default UserItem;