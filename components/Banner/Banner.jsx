import React, { useState, useRef, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import disableScroll from "disable-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { dataStarsTop } from "./Banner.data";
import {
  Container,
  InnerContent,
  InnerCircle,
  OuterCircle,
  ShakeBlock,
  Top,
} from "./Banner.style";
import MagicBall from "../MagicBall/MagicBall";
import Stars from "../Stars/Stars";
import TextLayout from "../TextLayout/TextLayout";
import TextCircle from "../TextCircle/TextCircle";
import MovingText from "../MovingText/MovingText";
import CtaScroll from "../CtaScroll/CtaScroll";
import { GRAB, DEFAULT } from "../Cursor/Cursor.type";
const Description = () => {
  return (
    <p>
      Never hang out with friends again and get out of anything with varying
      levels of success.
    </p>
  );
};

const Instructions = ({ finalSection }) => {
  return finalSection ? (
    <AnimatePresence
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.p>Here's our suggested excuse :</motion.p>
    </AnimatePresence>
  ) : (
    <AnimatePresence
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.p>Give it a good shake and get an iron-clad excuse.</motion.p>
    </AnimatePresence>
  );
};

const shakeVariants = {
  hidden: { scaleY: 0, translateY: "-50vh" },
  visible: { scaleY: 1, translateY: "-50vh" },
};

export default function Banner({ setCursorType, isLoading }) {
  const [shakeSection, setShakeSection] = useState(false);
  const [finalSection, setFinalSection] = useState(false);
  const [ballIsHovered, setBallIsHovered] = useState(false);

  const [shakeOffsetTop, setShakeOffsetTop] = useState(null);
  const [dragX, setDragX] = useState(null);

  const shakeRef = useRef(null);

  const handleEnter = () => {
    setShakeSection(true);
  };

  const handleLeave = () => {
    setShakeSection(false);
  };

  const onDragEnd = () => {
    setFinalSection(true);
  };

  const onDrag = (e) => {
    setDragX(e.clientX);
  };

  useEffect(() => {
    setShakeOffsetTop(shakeRef.current.getBoundingClientRect().y);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (ballIsHovered && shakeSection && !finalSection) {
      setCursorType(GRAB);
    } else {
      setCursorType(DEFAULT);
    }

    if (finalSection) {
      disableScroll.on();
    }
  }, [finalSection, ballIsHovered, shakeSection]);

  return (
    <Container>
      <>
        {!finalSection && (
          <TextCircle
            visible={!isLoading}
            topText="Magical Ball"
            bottomText="Of excuses"
          />
        )}
        {!isLoading && (
          <TextLayout appearingAnimationBot={true} topIsVisible={shakeSection}>
            <TextLayout.Top>
              <Instructions finalSection={finalSection} />
            </TextLayout.Top>
            <TextLayout.Left>
              <Description />
            </TextLayout.Left>
            <TextLayout.Right>
              <CtaScroll />
            </TextLayout.Right>
          </TextLayout>
        )}
      </>

      <Top>
        <OuterCircle>
          <InnerCircle>
            <InnerContent>
              {!isLoading && !finalSection && <Stars data={dataStarsTop} />}
              <MagicBall
                setCursorType={setCursorType}
                isDraggable={shakeSection}
                onDragEnd={onDragEnd}
                finalSection={finalSection}
                onDrag={onDrag}
                handleMouseEnter={() => {
                  setBallIsHovered(true);
                }}
                handleMouseLeave={() => {
                  setBallIsHovered(false);
                }}
              />
            </InnerContent>
          </InnerCircle>
        </OuterCircle>
      </Top>
      <Waypoint
        onEnter={handleEnter}
        onLeave={handleLeave}
        topOffset={"-99%"}
        bottomOffset={"99%"}
      >
        <ShakeBlock
          ref={shakeRef}
          variants={shakeVariants}
          animate={isLoading ? "hidden" : "visible"}
          transition={{ duration: 1 }}
        ></ShakeBlock>
      </Waypoint>
      <MovingText dragX={dragX} isVisible={shakeSection && !finalSection} />
    </Container>
  );
}
