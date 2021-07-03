import styled from "styled-components";
import { motion } from "framer-motion";
import { opacify } from "polished";

const FooterContainer = styled(motion.footer)`
  width: 100%;
  margin: auto;
  max-width: 1900px;
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
const FooterItem = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    span {
      position: relative;
    }
  }
`;
export default function Footer() {
  return (
    <FooterContainer
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.3, delay: 2.7 }}
    >
      <FooterItem>
        <a href="https://dribbble.com/michaelccraw">
          Inspired by <span>michaelccraw</span>
        </a>
      </FooterItem>
      <FooterItem>
        <a href="https://github.com/quentingrchr">
          Made by <span>@quentingrchr</span>
        </a>
      </FooterItem>
    </FooterContainer>
  );
}