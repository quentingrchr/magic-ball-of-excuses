import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 100vh;
  top: 0;
  width: 100vw;
  position: fixed;
  z-index: 7;
  padding: 10rem 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const TopEl = styled(motion.div)`
  width: 100%;
  height: 50%;
  color: ${(p) => p.theme.colors.text};
  font-size: 4rem;
  text-align: center;
  line-height: 5.6rem;
  font-family: "Degular Display Light";
  padding: 10rem 5rem;
  display: flex;
  justify-content: center;
  opacity: 0;
`;

const BottomCol = styled(motion.div)`
  color: ${(p) => p.theme.colors.text};
  font-size: 3.4rem;
  line-height: 5.6rem;
  font-family: "Degular Display Light";
  width: 50%;
  padding: 10rem 5rem;
  display: flex;
  justify-content: center;

  p  {
    width: 100%;
  }
`;

export const LeftEl = styled(BottomCol)`
  margin-right: 12.5vw;
`;

export const RightEl = styled(BottomCol)`
  margin-left: 12.5vw;
`;
export const Bottom = styled.div`
  width: 80%;
  margin: auto;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;
