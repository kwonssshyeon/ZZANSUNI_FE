import React from 'react';
import * as Styles from './styles';
import { PiStarFill, PiStarLight } from "react-icons/pi";


const ReviewItem = ({data}) => {
    const rating =2;
    return (
        <Styles.Wrapper>
            <Styles.UserWrapper>
            <Styles.Wrapper>
                <Styles.RowWrapper>
                <Styles.ImageBox><Styles.ProfileImg src={data.user.profileImageUrl} /></Styles.ImageBox>
                    <Styles.Name>{data.user.nickname}</Styles.Name>
                    <Styles.Tier>{data.user.tierinfo}</Styles.Tier>
                </Styles.RowWrapper>
                <Styles.SmallText>참여난이도 {data.challengeDifficulty}</Styles.SmallText>
            </Styles.Wrapper>
            <Styles.StarWrapper>
            {[...Array(rating)].map((a,i) => (
                <PiStarFill size='15' key={i} color='var(--color-green-01)'/>))}
            {[...Array(5 - rating)].map((a,i) => (
                <PiStarLight size='15' key={i} color='var(--color-green-01)'/>))}
            </Styles.StarWrapper>
            </Styles.UserWrapper>
            <Styles.Text>{data.content}</Styles.Text>
        </Styles.Wrapper>
    );
}


export default ReviewItem;