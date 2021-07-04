import styled from "styled-components";
import { motion } from "framer-motion";

export const Reveal = styled(motion.div)`
  color: ${(p) => p.theme.colors.text};
  text-transform: uppercase;
  font-family: "Degular Display Light";
  font-size: 2.4rem;
  width: 60%;
  z-index: 3;
  position: absolute;
  left: 50%;
  top: 50;
  transform: translateX(-50%);
`;
