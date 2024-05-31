import styled from '@emotion/styled';

export const StarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    width: 90%;
    border-radius: 10px;
    background-color: var(--color-green-06);
    padding: 0px 20px;
    justify-content: center;
`;

export const VLine = styled.div`
    border: #D7D7D7 solid 0.5px;
    height: 100px;
    border-radius: 10px;
    margin: 10px;
`

export const RWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    width: 170px;
    justify-content: space-between;
`;

export const CWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`;

export const Num = styled.div`
    font-size: var(--font-size-xxl);
    font-weight: bold;
`;

export const SubText = styled.div`
    font-size: var(--font-size-xs);
    color: var(--color-grey-01);
    margin: 0.2px;
`
export const StarRating = styled.div`
    position: relative;
    unicode-bidi: bidi-override;
    width: max-content;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color:  var(--color-green-01);
`
export const StarFill = styled.div`
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-text-fill-color: var(--color-green-01);
`
export const StarBase = styled.div`
    z-index: 0;
    padding: 0;
`;

export const Bar = styled.div`
    border-radius: 10px;
    height: 5px;
    --percentage: ${(props) => `${props.percentage}`};
    background: linear-gradient(to right, var(--color-green-01) var(--percentage), #D7D7D7 var(--percentage));
    width: 80px;
    flex-shrink: 0;
    margin: 6px 0;
`