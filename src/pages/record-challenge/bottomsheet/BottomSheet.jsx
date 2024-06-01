import useBottomSheet from "../../../hooks/useBottomSheet";

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
      <Header date = {data.createdAt.substr(0,10)} />
      <S.ContentWrapper>
        <S.SubText>{data.content}</S.SubText>
          <S.Image src={data.imageUrl}/>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
