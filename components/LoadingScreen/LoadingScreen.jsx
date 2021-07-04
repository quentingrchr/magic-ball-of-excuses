import styled from "styled-components";
import { motion, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Container = styled(motion.div)`
  background-color: ${(p) => p.theme.colors.white};
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: hidden;
  z-index: 30;
  /* transform-origin: top; */
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;
const OuterCircle = styled(motion.div)`
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

const InnerCircle = styled(motion.div)`
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

const Text = styled(motion.p)`
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

const motionPropsCircle = (transition) => {
  return {
    initial: {
      scale: 0,
      y: -100,
      translateX: "-50%",
      translateY: "50%",
    },
    animate: {
      scale: 1,
      y: 0,
      translateX: "-50%",
      translateY: "-50%",
    },
    exit: {
      opacity: 0,
    },
    transition,
  };
};

export default function LoadingScreen({
  from,
  to,
  completeLoading,
  isLoading,
}) {
  const textRef = useRef();

  const containerVariants = {
    visible: {
      // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      height: "100vh",
    },
    hidden: {
      // clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      height: "0vh",
    },
  };

  useEffect(() => {
    const text = textRef.current;

    const controls = animate(from, to, {
      duration: 5,
      onUpdate(value) {
        text.textContent = value.toFixed(0);
      },
      onComplete: () => {
        completeLoading();
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <Container
      variants={containerVariants}
      initial="visible"
      animate={isLoading ? "visible" : "hidden"}
      transition={{ duration: 0.6 }}
    >
      <Text
        ref={textRef}
        initial={{
          scale: 0,
          translateX: "-50%",
          translateY: "100%",
        }}
        animate={{
          scale: 1,
          translateX: "-50%",
          translateY: "-50%",
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 3,
        }}
      >
        56
      </Text>
      <OuterCircle {...motionPropsCircle({ duration: 3.5, delay: 0 })}>
        <InnerCircle
          {...motionPropsCircle({ duration: 3, delay: 0.5 })}
        ></InnerCircle>
      </OuterCircle>
    </Container>
  );
}
