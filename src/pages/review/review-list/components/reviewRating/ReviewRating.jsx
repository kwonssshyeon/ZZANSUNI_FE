import React, { useState,useEffect } from 'react';
import * as Styles from './styles';
import { getChallegeAvgScore } from '../../../../../apis/review/review.challenge.api';


const ReviewRating = ({props}) => {
    const [datas, setDatas] = useState(null);
    const [starAvg,setStarAvg] = useState(0);
    const [ratingToPercent,setRatingToPercent] = useState({width: `${(starAvg/5)*100}%`});
    

    useEffect(() => {
        getChallegeAvgScore(1).then((res) => {
            setDatas(res.ratingCount);
            console.log("ddd",res.ratingCount);
            setStarAvg(res.averageRating);
            setRatingToPercent({width: `${(res.averageRating/5)*100}%`})
        })}, []);
    
    return (
        <>
        {datas ?
        <Styles.StarWrapper>
            <Styles.CWrapper style={{alignItems: 'center'}}>
                <Styles.Num>{starAvg}</Styles.Num>
                <Styles.StarRating>
                    <Styles.StarFill style={ratingToPercent}>
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </Styles.StarFill>
                    <Styles.StarBase>
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </Styles.StarBase>
                </Styles.StarRating>
            </Styles.CWrapper>
            <Styles.VLine/>
            <Styles.RWrapper>
                <Styles.CWrapper>
                    <Styles.SubText>매우 만족</Styles.SubText>
                    <Styles.SubText>만족</Styles.SubText>
                    <Styles.SubText>보통</Styles.SubText>
                    <Styles.SubText>별로</Styles.SubText>
                    <Styles.SubText>매우 별로</Styles.SubText>
                </Styles.CWrapper>
                <Styles.CWrapper>
                    <Styles.Bar percentage={`${datas[1]*100}%`} />
                    <Styles.Bar percentage={`${datas[2]*100}%`} />
                    <Styles.Bar percentage={`${datas[3]*100}%`} />
                    <Styles.Bar percentage={`${datas[4]*100}%`} />
                    <Styles.Bar percentage={`${datas[5]*100}%`} />
                </Styles.CWrapper>
                <Styles.CWrapper>
                    <Styles.SubText>{datas[1]}</Styles.SubText>
                    <Styles.SubText>{datas[2]}</Styles.SubText>
                    <Styles.SubText>{datas[3]}</Styles.SubText>
                    <Styles.SubText>{datas[4]}</Styles.SubText>
                    <Styles.SubText>{datas[5]}</Styles.SubText>
                </Styles.CWrapper>
            </Styles.RWrapper>
        </Styles.StarWrapper>
        :<div/>
        }
        </>
    );
}


export default ReviewRating;