import React from 'react';
import TopBar from '../../../components/top-bar/top-Bar';
import * as Styles from './styles';
import ReviewItem from './components/reviewItem/ReviewItem';
import ReviewRating from './components/reviewRating/ReviewRating';

const ReviewList = () => {
    
    return (
        <Styles.Wrapper>
            <TopBar title={"챌린지 리뷰"}/>
            <Styles.Title>길에 떨어진 쓰레기 줍기 챌린지</Styles.Title>
            <ReviewRating />

            <Styles.List >
                <Styles.VLine/>
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
            </Styles.List>
        </Styles.Wrapper>
    );
}


export default ReviewList;