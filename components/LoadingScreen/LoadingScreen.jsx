import styled from "styled-components";
import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

import {
  Container,
  InnerCircle,
  OuterCircle,
  Text,
} from "./LoadingScreen.style";

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
