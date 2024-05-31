import React from 'react';
import * as Styles from './styles';


const ReviewRating = ({props}) => {
    const starAvg = 4.5;
    const ratingToPercent = {
        width: `${(starAvg/5)*100}%`,
    }
    
    return (
        <Styles.StarWrapper>
            <Styles.CWrapper style={{alignItems: 'center'}}>
                <Styles.Num>4.5</Styles.Num>
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
                    <Styles.Bar percentage={'40%'} />
                    <Styles.Bar percentage={'40%'} />
                    <Styles.Bar percentage={'40%'} />
                    <Styles.Bar percentage={'40%'} />
                    <Styles.Bar percentage={'40%'} />
                </Styles.CWrapper>
                <Styles.CWrapper>
                    <Styles.SubText>10</Styles.SubText>
                    <Styles.SubText>10</Styles.SubText>
                    <Styles.SubText>10</Styles.SubText>
                    <Styles.SubText>10</Styles.SubText>
                    <Styles.SubText>10</Styles.SubText>
                </Styles.CWrapper>
            </Styles.RWrapper>
        </Styles.StarWrapper>
    );
}


export default ReviewRating;