import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.white};
  position: fixed;
  z-index: 20;
  pointer-events: none;
`;
export const Dot = styled(motion.div)`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background-color: ${(p) => (p.grabCursor ? "red" : p.theme.colors.black)};
  transform: translate(-50%, -50%);
`;
export const IconContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 50%;
    height: auto;
  }
`;
