import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";


const useBottomSheet = (isClick) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!isClick) {
      controls.start("hidden");
    } else if (isClick) {
      controls.start("visible");
    }
  }, [controls, isClick]);

  return { controls };
};

export default useBottomSheet;
