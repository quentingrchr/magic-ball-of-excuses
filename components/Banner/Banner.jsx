import React, { useState, useRef, useEffect } from "react";
import { Waypoint } from "react-waypoint";

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
import { useDisableScroll } from "../../hooks/useDisableScroll";

const Description = () => {
  return (
    <p>
      Never hang out with friends again and get out of anything with varying
      levels of success.
    </p>
  );
};

const Instructions = () => {
  return <p>Give it a good shake and get an iron-clad excuse.</p>;
};

export default function Banner({ setCursorType }) {
  const [shakeSection, setShakeSection] = useState(false);
  const [finalSection, setFinalSection] = useState(false);
  const [ballIsHovered, setBallIsHovered] = useState(false);

  const [shakeOffsetTop, setShakeOffsetTop] = useState(null);
  const [dragX, setDragX] = useState(null);
  const [disableScroll, enableScroll] = useDisableScroll();

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
      disableScroll();
    }
  }, [finalSection, ballIsHovered, shakeSection]);

  return (
    <Container>
      <TextCircle topText="Magical Ball" bottomText="Of excuses" />
      <TextLayout
        appearingAnimationBot={true}
        topIsVisible={shakeSection && !finalSection}
      >
        <TextLayout.Top>
          <Instructions />
        </TextLayout.Top>
        <TextLayout.Left>
          <Description />
        </TextLayout.Left>
        <TextLayout.Right>
          <CtaScroll />
        </TextLayout.Right>
      </TextLayout>
      <Top>
        <OuterCircle>
          <InnerCircle>
            <InnerContent>
              <Stars data={dataStarsTop} />
              <MagicBall
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
          animate={{ scaleY: [0, 1], translateY: "-50vh" }}
          transition={{ duration: 1 }}
        ></ShakeBlock>
      </Waypoint>
      <MovingText dragX={dragX} isVisible={shakeSection && !finalSection} />
      {shakeOffsetTop && <TextLayout></TextLayout>}
    </Container>
  );
}
