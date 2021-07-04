import styled from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "polished";

export const Top = styled.div`
  height: 100vh;
  background-color: ${(p) => lighten(0.1, p.theme.colors.text)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShakeBlock = styled(motion.div)`
  height: 150vh;

  background-color: ${(p) => p.theme.colors.green};
  transform-origin: bottom;
  display: flex;
  justify-content: space-between;
`;

export const OuterCircle = styled.div`
  height: 120vh;
  width: 120vh;
  background-color: ${(p) => p.theme.colors.orange};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerCircle = styled.div`
  height: 80vh;
  width: 80vh;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;
`;

export const Container = styled.section`
  height: 200vh;
  width: 100vw;
  overflow: hidden;
`;
