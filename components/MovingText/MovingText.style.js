import styled from "styled-components";
import { motion } from "framer-motion";
export const Text = styled.span`
  display: block;
  margin-right: 15rem;
  white-space: nowrap;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.text};
  font-family: "Obviously Extended Semi Bold";
  font-weight: 700;
`;
export const TextContainer = styled(motion.p)`
  display: flex;
  pointer-events: none;
`;

export const TranslatableContainer = styled(motion.div)``;
export const MovinTextContainer = styled(motion.div)`
  position: fixed;
  z-index: 3;
  font-size: 12rem;
  top: 50%;
  transform: translateY(-50%);
  width: 100vw;
  margin: auto;
  overflow: hidden;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovinTextWrapper = styled(motion.div)`
  font-size: 12rem;
  overflow: scroll;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
