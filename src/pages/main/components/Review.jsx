import * as Styled from './styles';
import StarIcon from '@/assets/main/Star-Icon.svg';
import ProfileIcon from '@/assets/main/ZZAN-Profile.png';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

const Review = () => {
  return (
    <>
      <Styled.TitleText mgTP='2rem' mgBT='0.5rem' mgLF='1rem'>
        최근 챌린지 리뷰
      </Styled.TitleText>
      <Styled.ReviewLayout>
        <Styled.ChallengeLayout>
          <Styled.TitleText mgTP='0.5rem' mgBT='0.5rem' mgLF='0.5rem'>
            쓰레기 줍기 챌린지
          </Styled.TitleText>
          <Styled.StarContainer>
            <Styled.StarImg src={StarIcon} />
            <Styled.StarImg src={StarIcon} />
            <Styled.StarImg src={StarIcon} />
          </Styled.StarContainer>
          <Styled.ReviewProfileContainer>
            <Styled.ReviewProfileImg src={ProfileIcon} />
            <Styled.ReviewText fw='700'>짠돌이</Styled.ReviewText>
          </Styled.ReviewProfileContainer>
          <Styled.ReviewContents>
            <Styled.ReviewText>
              세상이 깨끗해지는 기분이에요! 포인트도 많이줘서 등급 올리기 ...
            </Styled.ReviewText>
          </Styled.ReviewContents>
        </Styled.ChallengeLayout>
      </Styled.ReviewLayout>
    </>
  );
};

export default Review;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: fit-content;
  padding: 16px;
  background-color: #eee !important;
  border-radius: 10px;
  cursor: grabbing;
  &::-webkit-scrollbar {
    display: none;
  }
  .swiper-slide {
    width: fit-content !important;
    background-color: transparent !important;
  }
`;
