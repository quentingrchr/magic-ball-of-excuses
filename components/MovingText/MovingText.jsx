import {
  MovinTextContainer,
  MovinTextWrapper,
  TextContainer,
  TranslatableContainer,
  Text,
} from "./MovingText.style";

import { useEffect, useState } from "react";
export default function MovingText({ isVisible, dragX }) {
  const length = 30;
  const arr = new Array(length).fill("");
  const [translateX, setTranslateX] = useState(0);

  const ContainerVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  function convertRange(value, oldRange, newRange) {
    return (
      ((value - oldRange.min) * (newRange.max - newRange.min)) /
        (oldRange.max - oldRange.min) +
      newRange.min
    );
  }

  useEffect(() => {
    if (dragX !== null) {
      const cmin = 0;
      const cmax = window.innerWidth;
      const inputRange = { min: cmin, max: cmax };
      const outputRange = { min: -100, max: 100 };
      setTranslateX(convertRange(dragX, inputRange, outputRange).toFixed(2));
    }
  }, [dragX]);

  const transition = {
    duration: 40,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    <MovinTextContainer
      animate={isVisible ? "visible" : "hidden"}
      variants={ContainerVariants}
    >
      <MovinTextWrapper>
        <TranslatableContainer
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <TextContainer
            animate={{
              translateX: ["0%", "-200%"],
            }}
            transition={transition}
          >
            {arr.map((_, i) => {
              return <Text key={i}>shake .</Text>;
            })}
          </TextContainer>
          <TextContainer
            animate={{
              translateX: ["-200%", "0%"],
            }}
            transition={transition}
          >
            {arr.map((_, i) => {
              return <Text key={i}>shake .</Text>;
            })}
          </TextContainer>
        </TranslatableContainer>
      </MovinTextWrapper>
    </MovinTextContainer>
  );
}
