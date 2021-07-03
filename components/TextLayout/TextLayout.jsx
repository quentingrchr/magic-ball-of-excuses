import React from "react";

import {
  Bottom,
  Container,
  LeftEl,
  TopEl,
  RightEl,
} from "./TextLayout.style.js";
import useScrollRatio from "../../hooks/useScrollRatio";

const Top = () => null;

const Left = () => null;

const Right = () => null;

export default function TextLayout({
  appearingAnimationBot,
  scrollStart = 0,
  children,
  topIsVisible,
}) {
  const [ratio] = useScrollRatio(window.innerHeight, scrollStart);

  const top = React.Children.toArray(children).find(
    (child) => child.type === Top
  );
  const left = React.Children.toArray(children).find(
    (child) => child.type === Left
  );
  const right = React.Children.toArray(children).find(
    (child) => child.type === Right
  );

  const variants = {
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

  return (
    <Container
      animate={
        appearingAnimationBot && { opacity: [0, 1], translateY: [10, 0] }
      }
      transition={{ duration: 0.5, delay: 2 }}
    >
      <TopEl animate={topIsVisible ? "visible" : "hidden"} variants={variants}>
        {top ? top.props.children : null}
      </TopEl>
      <Bottom>
        <LeftEl style={{ opacity: ratio }}>
          {left ? left.props.children : null}
        </LeftEl>
        <RightEl style={{ opacity: ratio }}>
          {right ? right.props.children : null}
        </RightEl>
      </Bottom>
    </Container>
  );
}

TextLayout.Top = Top;
TextLayout.Left = Left;
TextLayout.Right = Right;
