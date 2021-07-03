import styled from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "polished";

export const BallContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;
export const Ball = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 50rem;
  width: 50rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LightGradient = styled.div`
  position: absolute;
  top: 0;
  background: linear-gradient(
    52deg,
    rgba(0, 0, 0, 0) 65%,
    rgba(255, 255, 255, 1) 117%
  );
  height: 100%;
  width: 100%;
`;
export const OrangeGradient = styled.div`
  position: absolute;
  top: 0;
  background: ${({ theme }) =>
    `linear-gradient(196deg, rgba(0, 0, 0, 0) 61%, ${theme.colors.orange} 128%)`};
  height: 100%;
  width: 100%;
`;

export const NumberContainer = styled(motion.div)`
  background-color: ${(p) => lighten(0.1, p.theme.colors.text)};
  padding: 0.5rem;

  ${(p) => p.absolute && "position: absolute; left: 50%; top 50;"}

  top: 50%;
  left: 50%;

  width: 20rem;
  height: 20rem;
  text-align: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: bottom;
`;

export const Number = styled(motion.div)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16rem;
  transform: ${() => `translateY(-10%)`};
  font-family: "Chee Stinked";
`;

export const RevealContainer = styled(motion.div)`
  background-color: ${(p) => lighten(0.01, p.theme.colors.black)};
  padding: 0.5rem;
  width: 30rem;
  height: 30rem;
  text-align: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: bottom;
  position: absolute;
  top: 5%;
  overflow: hidden;
`;

export const Reveal = styled(motion.div)`
  color: ${(p) => p.theme.colors.text};
  text-transform: uppercase;
  font-family: "Degular Display Light";
  font-size: 2.4rem;
  width: 60%;
  z-index: 3;
`;

export const RevealStars = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

export const RevealGradient = styled.div`
  position: absolute;
  background-color: transparent;

  -webkit-box-shadow: 36px -45px 100px 5px rgba(15, 5, 107, 0.57);
  box-shadow: 36px -45px 100px 5px rgba(15, 5, 107, 0.57);

  width: 100%;
  height: 100%;
  bottom: -100%;
  left: -100%;
  z-index: 1;
`;

export const Shadow = styled(motion.div)`
  height: 0%;
  width: 20rem;
  border-radius: 50%;
  position: absolute;
  transform: translateY(20rem);
  bottom: 0;

  box-shadow: 0px 0px 60px 19px #000000;
`;
