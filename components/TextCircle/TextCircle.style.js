import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 75rem;
  height: 75rem;
  transform: translate(-50%, -50%);
  z-index: 8;
  border-radius: 50%;
`;

const Text = styled.div`
  font-size: 6rem;
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  transform: ${(p) => `rotate(${p.offsetRotate}deg)`};
  font-family: "Degular Display Medium";
  font-weight: 700;
  text-transform: uppercase;
`;
export const Bottom = styled(Text)`
  left: 0;

  i {
    transform: rotate(180deg) translateY(100%);
    transform-origin: bottom;
    display: inline-block;
  }
`;
export const Top = styled(Text)`
  top: 0;
  left: 0;

  i {
    display: inline-block;
  }
`;

export const Letter = styled(motion.span)`
  transform: ${(p) => `rotate(${p.rotate}deg)`};
  transform-origin: bottom;
  width: 6rem;
  overflow: visible;
  position: absolute;
  height: 50%;
  text-align: center;
  color: ${(p) => p.theme.colors[p.color]};
  opacity: 0;
`;
