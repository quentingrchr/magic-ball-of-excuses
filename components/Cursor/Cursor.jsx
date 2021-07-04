import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { Container, Dot, IconContainer } from "./Cursor.style";
import GrabIcon from "../GrabIcon/GrabIcon";
import ExternalLinkIcon from "../ExternalLinkIcon/ExternalLinkIcon";

const IconSwitcher = (type) => {
  switch (type) {
    case "grab":
      return <GrabIcon />;

      break;

    case "external_link":
      return <ExternalLinkIcon />;

      break;

    default:
      return null;
      break;
  }
};

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
      {cursorType === "default" ? (
        <Dot {...motionProps} />
      ) : (
        <IconContainer {...motionProps}>
          {IconSwitcher(cursorType)}
        </IconContainer>
      )}
    </Container>
  );
}
