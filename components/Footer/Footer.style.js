import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterContainer = styled(motion.footer)`
  width: 100%;
  margin: auto;
  font-family: "Degular Display Light";
  text-transform: uppercase;
  font-size: 2rem;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  color: ${(p) => p.theme.colors.text};
  bottom: 0;
  padding: 5rem 5vw;
`;
export const FooterItem = styled.div`
  a {
    display: block;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    span {
      position: relative;
    }
  }
`;
