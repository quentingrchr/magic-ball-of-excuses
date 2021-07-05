import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  background-color: ${(p) => p.theme.colors.white};
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: hidden;
  z-index: 30;
  /* transform-origin: top; */
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;
export const OuterCircle = styled(motion.div)`
  background-color: ${(p) => p.theme.colors.text};
  height: 105vh;
  width: 105vh;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 28;
`;

export const InnerCircle = styled(motion.div)`
  background-color: ${(p) => p.theme.colors.orange};
  height: 60vh;
  width: 60vh;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 29;
`;

export const Text = styled(motion.p)`
  color: ${(p) => p.theme.colors.white};
  font-size: 10rem;
  font-family: "Degular Display Medium";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
