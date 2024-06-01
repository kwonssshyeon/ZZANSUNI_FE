import styled from '@emotion/styled';
import { motion } from "framer-motion";

const BOTTOM_SHEET_HEIGHT = window.innerHeight;

export const Wrapper = styled(motion.div)`
  flex-direction: column;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: -50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: var(--color-green-06);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: 70%;
  width: 100%;
  
  transition: transform 150ms ease-out;
  margin: 0 auto;
  overflow: auto;
`;

export const HeaderWrapper = styled(motion.div)`
  height: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  padding: 15px;
  background-color: var(--color-green-01);
  color: var(--color-white);
  display: flex;
  flex-direction: row;
`;

export const HandleBar = styled(motion.div)`
  position: absolute;
  left: 50%;
  margin-left: -16px;
  width: 32px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--color-white);
`;

export const Text = styled.div`
  font-size: var(--font-size-lg);
  align-self: center;
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubText = styled.div`
  font-size: var(--font-size-md);
  text-align: left;
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
  align-self: center;
`;