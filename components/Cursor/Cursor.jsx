import React, { useEffect, useRef, useState } from "react";
import { useMotionValue } from "framer-motion";

import { Container, Dot, IconContainer } from "./Cursor.style";

import { ExternalLink, Grab, Github, Dribbble, Reload } from "../Icons";
import {
  DEFAULT,
  GRAB,
  DRIBBBLE,
  GITHUB,
  EXTERNAL_LINK,
  RELOAD,
} from "./Cursor.type";

const motionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: { duration: 0.2 },
};

const IconSwitcher = (type) => {
  switch (type) {
    case GRAB:
      return (
        <IconContainer {...motionProps}>
          <Grab />
        </IconContainer>
      );

    case EXTERNAL_LINK:
      return (
        <IconContainer {...motionProps}>
          <ExternalLink />
        </IconContainer>
      );

    case GITHUB:
      return (
        <IconContainer {...motionProps}>
          <Github />
        </IconContainer>
      );

    case DRIBBBLE:
      return (
        <IconContainer {...motionProps}>
          <Dribbble />
        </IconContainer>
      );

    case RELOAD:
      return (
        <IconContainer {...motionProps}>
          <Reload />
        </IconContainer>
      );

    default:
      return <Dot {...motionProps} />;
  }
};

export default function Cursor({ cursorType }) {
  const cursorRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [radius, setRadius] = useState(null);

  const handleMouseMove = (e) => {
    if (radius) {
      x.set(e.clientX - radius / 2);
      y.set(e.clientY - radius / 2);
    }
  };

  useEffect(() => {
    setRadius(cursorRef.current.getBoundingClientRect().width);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorRef.current]);

  return (
    <Container key={cursorType} ref={cursorRef} style={{ x, y }}>
      {cursorType === DEFAULT ? (
        <Dot {...motionProps} />
      ) : (
        IconSwitcher(cursorType)
      )}
    </Container>
  );
}
