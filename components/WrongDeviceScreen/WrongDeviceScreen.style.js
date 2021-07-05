import { motion } from "framer-motion";
import styled from "styled-components";

export const Text = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${(p) => p.theme.colors.green};
    font-size: 12rem;
    font-family: "Degular Display Medium";
    z-index: 30;
    width: 80%;

    margin-bottom: 40rem;
    text-align: center;
    em {
      text-decoration: underline;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
