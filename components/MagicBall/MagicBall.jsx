import { useEffect, useState, useRef } from "react";
import useScrollRatio from "../../hooks/useScrollRatio";
import {
  Ball,
  BallContainer,
  OrangeGradient,
  LightGradient,
  Number,
  NumberContainer,
  RevealGradient,
  RevealStars,
  RevealContainer,
  Shadow,
} from "./MagicBall.style";
import { RELOAD, DEFAULT } from "../Cursor/Cursor.type";
import Stars from "../Stars/Stars";
import RevealTexts from "../RevealsTexts/RevealTexts";
import { dataStarsReveal, apologies, excuses } from "./MagicBall.data";
import getRandomItemInArray from "../../utils/getRandomItemInArray";

const variantsBall = {
  iddle: {
    translateY: [0, -20, 0],
    transition: {
      duration: 4,
      delay: 2,
      times: [0, 0.1, 0.8, 0.9],
      repeat: Infinity,
      type: "spring",
      bounce: 1,
    },
  },
  reveal: {
    scale: 3,
    y: 200,
  },
};

const variantsNumber = {
  hidden: {
    y: -400,
    transition: {
      duration: 0.2,
    },
  },
  visible: {},
};

const variantsReveal = {
  hidden: {
    y: 400,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function MagicBall({
  isDraggable,
  onDragEnd,
  onDrag,
  finalSection,
  handleMouseEnter,
  handleMouseLeave,
  setCursorType,
}) {
  const [cursorX, setCursorX] = useState(0);
  const [translateRatio, setTranslateRatio] = useState(0);
  const [scrollRatio] = useScrollRatio(window.innerHeight, 0, true, 2);
  const [indexText, setIndexText] = useState(0);
  const revealTextsRef = useRef(null);

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
  };

  const getTranslateRatio = (cursorX) => {
    const totalWidth = window.innerWidth;
    const ratio = ((totalWidth / 2 - cursorX) / totalWidth) * 2;
    if (ratio > 1 || ratio < -1) {
      return;
    } else {
      setTranslateRatio(ratio.toFixed(2) * -1);
    }
  };

  const translateYRelativeToMouse = () => {
    if (finalSection) return 0;
    return -40 + Math.abs(translateRatio * 1 * 5);
  };

  const translateYRelativeToScrollInitial = () => {
    if (finalSection) return 0;
    return scrollRatio * 250;
  };

  const translateXRelativeToMouse = () => {
    if (finalSection) return 0;
    return 25 * translateRatio;
  };

  const translateAbsolute = () => {
    return -50;
  };

  const translateYRelativeToScrollDrag = () => {
    if (finalSection) return 0;
    return 500 - scrollRatio * 500;
  };

  const getRevealText = () => {
    return getRandomItemInArray(apologies) + getRandomItemInArray(excuses);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Init data for reveal
    let data = [];
    for (let i = 0; i < 30; i++) {
      let text = getRevealText();
      data.push(text);
    }
    data.push("No more excuses, reload the page");
    revealTextsRef.current = data;

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    getTranslateRatio(cursorX);
  }, [cursorX]);

  return (
    <BallContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Ball
        animate={finalSection ? "reveal" : "iddle"}
        variants={variantsBall}
        drag={isDraggable && !finalSection && "x"}
        dragConstraints={
          isDraggable && {
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }
        }
        dragMomentum={false}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      >
        <LightGradient />
        <OrangeGradient />

        {/* Number Initial Section */}
        {!finalSection && (
          <NumberContainer
            absolute
            style={{
              transform: `
          translateY(${
            translateYRelativeToMouse() -
            translateYRelativeToScrollInitial() +
            translateAbsolute()
          }%)
          translateX(${translateXRelativeToMouse() + translateAbsolute()}%)
          rotate(${8 * translateRatio}deg)`,
            }}
          >
            <Number>8</Number>
          </NumberContainer>
        )}

        {/* Number Drag Section */}
        <NumberContainer
          style={{
            transform: `
          translateY(${
            translateYRelativeToMouse() + translateYRelativeToScrollDrag()
          }%)
          translateX(${translateXRelativeToMouse()}%)
          rotate(${8 * translateRatio}deg)`,
          }}
          animate={finalSection && "hidden"}
          variants={variantsNumber}
        >
          <Number>8</Number>
        </NumberContainer>

        {/* Reveal Final Section */}
        <RevealContainer
          initial={{
            y: 400,
          }}
          animate={finalSection ? "visible" : "hidden"}
          variants={variantsReveal}
          onClick={() => {
            setIndexText(indexText + 1);
          }}
          onMouseEnter={() => {
            finalSection && setCursorType(RELOAD);
          }}
          onMouseLeave={() => {
            setCursorType(DEFAULT);
          }}
        >
          {revealTextsRef.current && (
            <RevealTexts texts={revealTextsRef.current} index={indexText} />
          )}

          <RevealStars>
            {finalSection && <Stars data={dataStarsReveal} />}
          </RevealStars>
          <RevealGradient />
        </RevealContainer>
      </Ball>
      <Shadow
        animate={{
          width: ["15rem", "20rem", "15rem"],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 4,
          times: [0, 0.1, 0.8, 0.9],
          repeat: Infinity,
          type: "spring",
          bounce: 0.5,
        }}
      />
    </BallContainer>
  );
}
