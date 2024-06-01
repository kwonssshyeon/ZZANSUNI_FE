import React, { useState,useEffect } from 'react';
import TopBar from '../../../components/top-bar/top-Bar';
import * as Styles from './styles';
import ReviewItem from './components/reviewItem/ReviewItem';
import ReviewRating from './components/reviewRating/ReviewRating';
import { getReview } from '../../../apis/review/review.challenge.api';
import { useInView } from 'react-intersection-observer';


const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [page, setPage] = useState(0);
    const [ref, inView] = useInView({threshold: 0.5});
    const [hasNext, setHasNext] = useState(true);


    useEffect(() => {
        if (hasNext) {
            getReview(1,page).then((res) => {
                setReviews([...reviews, ...(res.data)]);
                setPage((page) => page + 1);
                setHasNext(res.hasNext)
            })}
        }, [inView]);
    

    return (
        <Styles.Wrapper>
            <TopBar title={"챌린지 리뷰"}/>
            <Styles.Title>길에 떨어진 쓰레기 줍기 챌린지</Styles.Title>
            <ReviewRating />
            <Styles.List >
                <Styles.VLine/>
                {reviews.map((item) => (
                    <ReviewItem key={item.ranking} data={item}/>
                ))}
                {hasNext ? <div ref={ref}>로딩..</div>:<div/>}
            </Styles.List>
        </Styles.Wrapper>
    );
}


export default ReviewList;