import useBottomSheet from "../../../hooks/useBottomSheet";
import Dummy from "../../../assets/dummy.png";

import * as S from "./styles";
import Header from "./Header";

const BottomSheet = ({ data , isOpen, onDragEnd}) => {
  const { controls } = useBottomSheet(isOpen);
  if (!isOpen) {
    return null;
  }
  return (
    <S.Wrapper
      drag="y"
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400
      }}
      variants={{
        visible: { y: 0 },
        hidden: { y: "100%" }
      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
    >
      <Header date = {data.date} />
      <S.ContentWrapper>
        <S.SubText>오늘 길에 떨어진 쓰레기 줍기 챌린지에 참여했습니다. 
          공원에서 쓰레기를 주우며 주변을 깨끗하게 만들었습니다. 
          작은 행동이지만 환경 보호에 기여했다는 생각에 뿌듯함을 느꼈습니다. 
          앞으로도 꾸준히 참여하고 싶습니다.</S.SubText>
          <S.Image src={Dummy}/>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
