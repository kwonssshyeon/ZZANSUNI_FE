import React from 'react';
import * as Styles from './styles';
import { PiStarFill, PiStarLight } from "react-icons/pi";
import UserImage from '../../../../../assets/main/ZZAN-Logo.svg';

const ReviewItem = () => {
    const rating = 3;
    return (
        <Styles.Wrapper>
            <Styles.UserWrapper>
            <Styles.Wrapper>
                <Styles.RowWrapper>
                <Styles.ProfileImg src={UserImage}/>
                    <Styles.Name>짠돌이</Styles.Name>
                    <Styles.Tier>노비 III</Styles.Tier>
                </Styles.RowWrapper>
                <Styles.SmallText>참여난이도 8</Styles.SmallText>
            </Styles.Wrapper>
            <Styles.StarWrapper>
            {[...Array(rating)].map((i) => (
                <PiStarFill size='15' key={i} color='var(--color-green-01)'/>))}
            {[...Array(5 - rating)].map((i) => (
                <PiStarLight size='15' key={i} color='var(--color-green-01)'/>))}
            </Styles.StarWrapper>
            </Styles.UserWrapper>
            <Styles.Text>작은 실천이지만 많은 사람들이 함께하면 큰 변화를 만들 수 있다는 걸 깨달았고, 앞으로도 정기적으로 참여하며 일상에서도 쓰레기를 줄이는 노력을 할 계획입니다.</Styles.Text>
        </Styles.Wrapper>
    );
}


export default ReviewItem;